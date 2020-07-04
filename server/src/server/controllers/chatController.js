const db = require('../models');
const controller = require('../../socketInit');
const chatQueries = require('./queries/chatQueries');
const NotFoundError = require('../errors/UserNotFoundError');

module.exports.addMessage = async (req, res, next) => {
  try {
    const { tokenData: { userId }, body: { messageBody, interlocutor, conversationId } } = req;
    const message = await db.Messages.create({ body: messageBody, UserId: userId, ConversationId: conversationId });
    const preview = {
      id: message.id,
      conversationId: message.ConversationId,
      UserId: userId,
      body: messageBody,
      createdAt: message.createdAt,
      interlocutor,
    };
    controller.getChatController().emitNewMessage(interlocutor.id, {
      message,
      preview,
    });

    res.send({ message, preview });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getChat = async (req, res, next) => {
  try {
    const { query: { id } } = req; //conversationId
    const chat = await db.Conversations.findOne({
      where: {
        id,
      },
      include: [{
        model: db.Messages,
        order: [
          ['createdAt', 'ASC'],
        ],
      }],
    });
    if (!chat) {
      next(new NotFoundError('Chat not found'));
    }
    let interlocutorId;
    [chat.interlocutorId, chat.UserId].forEach((userId) => {
      if (userId !== req.tokenData.userId) {
        interlocutorId = userId;
      }
    });
    if (!interlocutorId) {
      next(new NotFoundError('Interlocutor not found'));
    }
    const interlocutor = await db.Users.findOne({
      where: {
        id: interlocutorId,
      },
      attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
    });
    res.send({ interlocutor, messages: chat.Messages, conversationId: chat.id });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.createChat = async (req,res,next) => {
  try {
    const {body: {interlocutor}, tokenData: {userId}} = req;
    const conversation = await chatQueries.createConversation(userId, interlocutor.id);
    const result = conversation.dataValues;
    result.blackList = false;
    result.favoriteList = false;

    const preview = {
      ...result,
      Users:[{...interlocutor}],
      Messages:[],
    };

    res.send({result, preview, interlocutor});
  }catch (err) {
    console.log(err);
    next(err);
  }
};


module.exports.getPreview = async (req, res, next) => {
  const blockedUsersArray = [];
  const favoriteUsersArray = [];
  try {
    const { conversationList, tokenData: { userId } } = req;

    const blockedUsers = await db.BlackList.findAll({
      where: {
        UserId: userId,
      },
    });
    blockedUsers.forEach(user => blockedUsersArray.push(user.blockedId));

    const favoriteUsers = await db.FavoriteList.findAll({
      where: {
        UserId: userId,
      },
    });
    favoriteUsers.forEach(user => favoriteUsersArray.push(user.favoriteId));

    const conversations = await chatQueries.getConversationsPreview(conversationList, {
      [db.Sequelize.Op.not]: [{id: req.tokenData.userId}],
    });
    const result = conversations.map(conversation => {
      return {
        ...conversation,
        blackList:blockedUsersArray.includes(conversation.interlocutorId) || blockedUsersArray.includes(conversation.UserId),
        favoriteList:favoriteUsersArray.includes(conversation.interlocutorId) || favoriteUsersArray.includes(conversation.UserId),
      };
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.blackList = async (req, res, next) => {
  let result;
  let blackListRecord;
  try {
    const {body: {interlocutorId, isCreate}, tokenData: {userId}} = req;
    const predicate = {
      UserId: userId,
      blockedId: interlocutorId,
    };
    if (isCreate) {
      blackListRecord = await db.BlackList.create(predicate);
    } else {
      blackListRecord = await db.BlackList.findOne({where: predicate});
      await db.BlackList.destroy({where: predicate});
    }
    result = await chatQueries.getUserConversation( {
      [db.Sequelize.Op.or]: [{
        UserId: blackListRecord.blockedId,
        interlocutorId: userId,
      }, {
        interlocutorId: blackListRecord.blockedId,
        UserId:userId,
      }],
    });
    controller.getChatController().emitChangeBlockStatus(interlocutorId, /*chat*/ result);
    res.status(200).send({...result,isCreate});
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.favoriteList = async (req, res, next) => {
  let result;
  let favoriteListRecord;
  try {
    const {body: {interlocutorId, isCreate}, tokenData: {userId}} = req;
    const predicate = {
      UserId: userId,
      favoriteId: interlocutorId,
    };
    if (isCreate) {
      favoriteListRecord = await db.FavoriteList.create(predicate);
    } else {
      favoriteListRecord = await db.FavoriteList.findOne({where: predicate});
      await db.FavoriteList.destroy({where: predicate});
    }
    result = await chatQueries.getUserConversation({
      [db.Sequelize.Op.or]: [{
        UserId: favoriteListRecord.favoriteId,
        interlocutorId: userId,
      }, {
        interlocutorId: favoriteListRecord.favoriteId,
        UserId: userId,
      }],
    });
    res.status(200).send({...result,isCreate});
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getCatalogs = async (req, res, next) => {
  try {
    const { tokenData: { userId } } = req;
    const catalogs = await db.Catalogs.findAll({
      where: {
        userId,
      },
      include: [{
        model: db.Conversations,
      }],
    });
    res.send(catalogs);
  } catch (err) {
    console.log(err);

    next(err);
  }
};

module.exports.createCatalog = async (req, res, next) => {
  try {
    const { tokenData: { userId }, body: { catalogName, chatId } } = req;
    const catalog = await db.Catalogs.create({
      name: catalogName,
      userId,
    });
    await db.CatalogToConversation.create({
      CatalogId: catalog.id,
      ConversationId: chatId,
    });
    const result = await chatQueries.getCatalogById(catalog.id);
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.updateNameCatalog = async (req, res, next) => {
  try {
    const { body: { catalogName, catalogId } } = req;

    await db.Catalogs.update({
      name: catalogName,
    }, {
      where: {
        id: catalogId,
      },
    });
    const catalog = await chatQueries.getCatalogById(catalogId);
    res.send(catalog);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.deleteCatalog = async (req, res, next) => {
  try {
    const { tokenData: { userId }, query: { id } } = req; // id->catalogId
    await db.Catalogs.destroy({ where: { id, userId } });
    res.end();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.addNewChatToCatalog = async (req, res, next) => {
  try {
    const { body: { catalogId, chatId } } = req;
    await db.CatalogToConversation.create({
      CatalogId: catalogId,
      ConversationId: chatId,
    });
    const catalog = await chatQueries.getCatalogById(catalogId);
    res.send(catalog);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.removeChatFromCatalog = async (req, res, next) => {
  try {
    const { query: { id, catalogId } } = req; //id->chatId
    await db.CatalogToConversation.destroy({
      where: {
        ConversationId: id,
        CatalogId: catalogId,
      },
    });
    const catalog = await chatQueries.getCatalogById(catalogId);
    res.send(catalog).status(200);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
