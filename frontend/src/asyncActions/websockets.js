import { io } from "socket.io-client";
import { SOKET_URI } from '../utils'
import { wsConnected, wsRecievedMessage } from '../actions/websocket'


const socketMiddleware = () => {
  let socket = null;
  
  return store => next => action => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = io(SOKET_URI)

        socket.on('connect', () => {
          store.dispatch(wsConnected());
        })
        socket.on('newMessage', (event) => {
          // console.log('event', event)
          store.dispatch(wsRecievedMessage(event))
        })
        break;
      case 'WS_SENDED_MESSAGE':
        const dataSendedMessage = {...action.payload, channelId: store.getState().currentChannelId, username: store.getState().user.username }
        // console.log('dataSendedMessage', dataSendedMessage)
        socket.emit('newMessage', dataSendedMessage)
      default:
        return next(action);
    }
  }
}

export default socketMiddleware;