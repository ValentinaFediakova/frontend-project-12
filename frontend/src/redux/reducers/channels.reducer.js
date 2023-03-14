import { CHANNELS_ADD, CHANNEL_ADD, CHANNEL_REMOVE, CHANNEL_RENAME, CHANNEL_SET_ACTIVE } from '../actionTypes/channels.actionType'
import { DEFAULT_CHANNEL } from '../../utils'


const channels = (state = [], action) => {
  switch(action.type){
    case CHANNELS_ADD:
      return {...state, items:[...state.items, ...action.payload]}
    case CHANNEL_ADD:
      return {...state, items:[...state.items, action.payload]}
    case CHANNEL_REMOVE:
      console.log('CHANNEL_REMOVE action.payload', action.payload)

      if (action.payload.id === state.currentChannelId) {
        console.log('deletedChannelId === currentChannelId')
        return { ...state, currentChannelId: DEFAULT_CHANNEL, items: state.items.filter(({id}) => id !== action.payload.id)}
      } else {
        return { ...state, items: state.items.filter(({id}) => id !== action.payload.id)}
      }
    case CHANNEL_RENAME:
      const channelWithRenamedOne = state.items.map((item)=> {
        if (item.id === action.payload.id) {
          return { ...item, name: action.payload.name }
        }
        return item
      })
      return { ...state, items: channelWithRenamedOne }
    case CHANNEL_SET_ACTIVE:
      console.log('CHANNEL_SET_ACTIVE action.payload', action.payload)
      return { ...state, currentChannelId: action.payload }
    default: 
      return state
  }
}

export default channels;