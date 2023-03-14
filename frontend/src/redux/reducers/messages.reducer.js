import { MESSAGES_ADD, MESSAGE_ADD } from '../actionTypes/messages.actionType'

// const MESSAGES_ADD = 'MESSAGES_ADD'
// const MESSAGES_REMOVE = 'MESSAGES_REMOVE'
// const WS_RECIEVED_MESSAGE = 'WS_RECIEVED_MESSAGE'
// const WS_REMOVED_CHANNEL = 'WS_REMOVED_CHANNEL'

const messages = (state = [], action) => {
  switch(action.type){
    case MESSAGES_ADD:
      return {...state, items:[...state.items, ...action.payload]}
    case MESSAGE_ADD:
      return {...state, items:[...state.items, action.payload]}
    // case WS_REMOVED_CHANNEL:
    //   return {...state, items: state.items.filter(({ channelId }) => channelId !== action.payload.id)}
    // case WS_RECIEVED_MESSAGE:
    //   return {...state, items:[...state.items, action.payload]}
    default: 
      return state
  }
}

export default messages;