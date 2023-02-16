const CHANNELS_ADD = 'CHANNELS_ADD'
const CHANNELS_REMOVE = 'CHANNELS_REMOVE'

const channels = (state = [], action) => {
  switch(action.type){
    case CHANNELS_ADD:
      return {...state, items:[...state.items, ...action.payload]}
    case CHANNELS_REMOVE: 
      return {...state, channels: state.channels.filter(({id}) => id !== action.payload)}
    default: 
      return state
  }
}

export default channels;