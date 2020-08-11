import ACTION from "./actionTypes"

export const authActionLogin = (data) => {
  return {
    type: ACTION.AUTH_ACTION_LOGIN,
    data,
  }
}

export const authActionRegister = (data) => {
  return {
    type: ACTION.AUTH_ACTION_REGISTER,
    data,
  }
}

export const clearErrorSignUpAndLogin = () => {
  return {
    type: ACTION.AUTH_ACTION_CLEAR_ERROR,
  }
}

export const clearUserStore = () => {
  return {
    type: ACTION.CLEAR_USER_STORE,
  }
}

export const clearAddOfferError = () => {
  return {
    type: ACTION.CLEAR_ADD_OFFER_ERROR,
  }
}

export const clearChangeMarkError = () => {
  return {
    type: ACTION.CLEAR_CHANGE_MARK_ERROR,
  }
}

export const clearSetOfferStatusError = () => {
  return {
    type: ACTION.CLEAR_SET_OFFER_STATUS_ERROR,
  }
}

export const getUserAction = (data) => {
  return {
    type: ACTION.GET_USER_ACTION,
    replace: data,
  }
}

export const getDataForContest = (data) => {
  return {
    type: ACTION.GET_DATA_FOR_CONTEST_ACTION,
    data,
  }
}

export const clearDataForContest = () => ({
  type: ACTION.CLEAR_DATA_FOR_SELECTS,
})

export const payRequest = (data) => {
  return {
    type: ACTION.PAYMENT_ACTION,
    data,
  }
}

export const getContestsForCreative = (data) => {
  return {
    type: ACTION.GET_CONTESTS_FOR_CREATIVE,
    data,
  }
}

export const getContestsForCustomer = (data) => {
  return {
    type: ACTION.GET_CONTESTS_FOR_CUSTOMER,
    data,
  }
}

export const getContestById = (data) => {
  return {
    type: ACTION.GET_CONTEST_BY_ID_ACTION,
    data,
  }
}

export const selectBundle = (bundle) => {
  return {
    type: ACTION.SELECT_BUNDLE_ACTION,
    bundle,
  }
}

export const clearBundle = () => {
  return {
    type: ACTION.CLEAR_BUNDLE_ACTION,
  }
}

export const updateContest = (data) => {
  return {
    type: ACTION.UPDATE_CONTEST_ACTION,
    data,
  }
}

export const saveContestToStore = (data) => {
  return {
    type: ACTION.SAVE_CONTEST_TO_STORE,
    data,
  }
}

export const changeMark = (data) => {
  return {
    type: ACTION.CHANGE_MARK_ACTION,
    data,
  }
}

export const setOffer = (data) => {
  return {
    type: ACTION.SET_OFFER_ACTION,
    data,
  }
}

export const setOfferStatus = (data) => {
  return {
    type: ACTION.SET_OFFER_STATUS_ACTION,
    data,
  }
}

export const createCatalog = (data) => {
  return {
    type: ACTION.CREATE_CATALOG_REQUEST,
    data,
  }
}

export const updateUserData = (data) => {
  return {
    type: ACTION.UPDATE_USER_DATA,
    data,
  }
}

export const cashOut = (data) => {
  return {
    type: ACTION.CASHOUT_ACTION,
    data,
  }
}

export const clearContestList = () => {
  return {
    type: ACTION.CLEAR_CONTESTS_LIST,
  }
}

export const onlyForNotAuthorize = (data) => {
  return {
    type: ACTION.ONLY_FOR_NOT_AUTHORIZE_USERS,
    replace: data,
  }
}

export const headerRequest = () => {
  return {
    type: ACTION.HEADER_REQUEST_AUTHORIZE,
  }
}

export const clearAuth = () => {
  return {
    type: ACTION.AUTH_ACTION_CLEAR,
  }
}

export const getPreviewChat = () => {
  return {
    type: ACTION.GET_PREVIEW_CHAT_ASYNC,
  }
}

export const backToDialogList = () => {
  return {
    type: ACTION.BACK_TO_DIALOG_LIST,
  }
}

export const goToExpandedDialog = (data) => {
  return {
    type: ACTION.GO_TO_EXPANDED_DIALOG,
    data,
  }
}

export const getDialogMessages = (id) => {
  return {
    type: ACTION.GET_DIALOG_MESSAGES_ASYNC,
    id,
  }
}

export const sendMessageAction = (data) => {
  return {
    type: ACTION.SEND_MESSAGE_ACTION,
    data,
  }
}

export const addMessage = (data) => {
  return {
    type: ACTION.SEND_MESSAGE,
    data,
  }
}

export const clearMessageList = () => {
  return {
    type: ACTION.CLEAR_MESSAGE_LIST,
  }
}

export const changeChatShow = () => {
  return {
    type: ACTION.CHANGE_CHAT_SHOW,
  }
}

export const setNewCustomerFilter = (filter) => {
  return {
    type: ACTION.SET_NEW_CUSTOMER_FILTER,
    filter,
  }
}

export const setNewCreatorFilter = (filter) => {
  return {
    type: ACTION.SET_NEW_CREATOR_FILTER,
    filter,
  }
}

export const setPreviewChatMode = (mode) => {
  return {
    type: ACTION.SET_CHAT_PREVIEW_MODE,
    mode,
  }
}

export const changeChatFavorite = (data) => {
  return {
    type: ACTION.SET_CHAT_FAVORITE_FLAG,
    data,
  }
}

export const changeChatBlock = (data) => {
  return {
    type: ACTION.SET_CHAT_BLOCK_FLAG,
    data,
  }
}

export const changeBlockStatusInStore = (data) => {
  return {
    type: ACTION.CHANGE_CHAT_BLOCK,
    data,
  }
}

export const getCatalogList = () => {
  return {
    type: ACTION.GET_CATALOG_LIST_ASYNC,
  }
}

export const changeShowModeCatalog = (data) => {
  return {
    type: ACTION.CHANGE_SHOW_MODE_CATALOG,
    data,
  }
}

export const changeTypeOfChatAdding = (data) => {
  return {
    type: ACTION.CHANGE_TYPE_ADDING_CHAT_IN_CATALOG,
    data,
  }
}

export const changeShowAddChatToCatalogMenu = (data) => {
  return {
    type: ACTION.CHANGE_SHOW_ADD_CHAT_TO_CATALOG,
    data,
  }
}

export const addChatToCatalog = (data) => {
  return {
    type: ACTION.ADD_CHAT_TO_CATALOG_ASYNC,
    data,
  }
}

export const deleteCatalog = (data) => {
  return {
    type: ACTION.DELETE_CATALOG_REQUEST,
    data,
  }
}

export const removeChatFromCatalog = (data) => {
  return {
    type: ACTION.REMOVE_CHAT_FROM_CATALOG_REQUEST,
    data,
  }
}

export const changeRenameCatalogMode = () => {
  return {
    type: ACTION.CHANGE_RENAME_CATALOG_MODE,
  }
}

export const changeCatalogName = (data) => {
  return {
    type: ACTION.CHANGE_CATALOG_NAME_REQUEST,
    data,
  }
}

export const changeEditContest = (data) => {
  return {
    type: ACTION.CHANGE_EDIT_CONTEST,
    data,
  }
}

export const changeContestViewMode = (data) => {
  return {
    type: ACTION.CHANGE_CONTEST_VIEW_MODE,
    data,
  }
}

export const changeShowImage = (data) => {
  return {
    type: ACTION.CHANGE_SHOW_IMAGE,
    data,
  }
}

export const changeFocusOnCard = (data) => {
  return {
    type: ACTION.CHANGE_FOCUS_ON_CARD,
    data,
  }
}

export const changeProfileModeView = (data) => {
  return {
    type: ACTION.CHANGE_PROFILE_MODE_VIEW,
    data,
  }
}

export const changeEditModeOnUserProfile = (data) => {
  return {
    type: ACTION.CHANGE_EDIT_MODE_ON_USER_PROFILE,
    data,
  }
}

export const clearPaymentStore = () => {
  return {
    type: ACTION.CLEAR_PAYMENT_STORE,
  }
}

export const clearUpdateContestStore = () => {
  return {
    type: ACTION.CLEAR_UPDATE_CONTEST_STORE,
  }
}

export const clearUserError = () => {
  return {
    type: ACTION.CLEAR_USER_ERROR,
  }
}

export const clearChatError = () => {
  return {
    type: ACTION.CLEAR_CHAT_ERROR,
  }
}

export const changeModalShow = (data) => {
  return {
    type: ACTION.CHANGE_SHOW_MODAL,
    data,
  }
}

export const createRestorePasswordAction = (data) => ({
  type: ACTION.RESTORE_PASSWORD_ACTION,
  data,
})

export const createUpdatePasswordAction = (token) => ({
  type: ACTION.UPDATE_LOST_PASSWORD,
  token,
})

export const createClearPasswordReecoverStateAction = () => ({
  type: ACTION.CLEAR_PASSWORD_RECOVER_STATE,
})

export const createGetOffersAction = (offset) => ({
  type: ACTION.GET_UN_MODERATED_OFFERS,
  offset,
})

export const createGetOffersErrorAction = (data) => ({
  type: ACTION.GET_UN_MODERATED_OFFERS_ERROR,
  data,
})

export const createGetOffersSuccessAction = (data) => ({
  type: ACTION.GET_UN_MODERATED_OFFERS_SUCCESS,
  data,
})

export const createClearOffersAction = () => ({
  type: ACTION.CLEAR_OFFER_STORE,
})

export const createSetOfferAction = (data) => ({
  type: ACTION.MODERATOR_SET_OFFER,
  data,
})

export const createSetOfferSuccessAction = (data) => ({
  type: ACTION.MODERATOR_SET_OFFER_SUCCESS,
  data,
})

export const createSetOfferErrorAction = (data) => ({
  type: ACTION.MODERATOR_SET_OFFER_ERROR,
  data,
})

export const createChangeModalViewAction = (data) => ({
  type: ACTION.CHANGE_MODERATOR_OFFERS_MODAL,
  data,
})

export const createSetTextIndexAction = (data) => ({
  type: ACTION.SET_TEXT_INDEX,
  data,
})

export const createDialogAction = (data) => ({
  type: ACTION.CREATE_DIALOG,
  data,
})

export const createGetTimersAction = () => ({
  type: ACTION.GET_TIMERS,
})

export const createCreateTimerAction = (data) => ({
  type: ACTION.CREATE_TIMER,
  data,
})

export const createDeleteTimerAction = (data) => ({
  type: ACTION.DELETE_TIMER,
  data,
})

export const createUpdateTimerAction = (data) => ({
  type: ACTION.UPDATE_TIMER,
  data,
})
