import WebSocket from './WebSocket';
import React from 'react';
import Notification from '../../../components/Notification/Notification';
import {toast} from 'react-toastify';

class NotificationSocket extends WebSocket {
    constructor(dispatch, getState, room) {
        super(dispatch, getState, room);
        this.listen();
    }

    listen = () => {
        this.socket.on('connect', () => {
            this.anotherSubscribes();
        });
    };

    anotherSubscribes = () => {
        this.onEntryCreated();
        this.onChangeMark();
        this.onChangeOfferStatus();
    };

    onChangeMark = () => {
        this.socket.on('changeMark', () => {
            toast('Someone rated your offer');
        })
    };

    onChangeOfferStatus = () => {
        this.socket.on('changeOfferStatus', (message) => {
            toast(<Notification message={message.message} contestId={message.contestId}/>);
        })
    };

    onEntryCreated = () => {
        this.socket.on('onEntryCreated', () => {
            toast('New Entry');
        })
    };

    subscribe = (id) => {
        this.socket.emit('subscribe', id);
    };

    unsubsctibe = (id) => {
        this.socket.emit('unsubscribe', id);
    }
}

export default NotificationSocket;