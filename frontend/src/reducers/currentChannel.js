const CHANNELS_CHANGE = 'CHANNELS_CHANGE'

const currentChannelId = (state = [], action) => {
  switch(action.type){
    case CHANNELS_CHANGE:
      return action.payload
    default: 
      return state
  }
}

export default currentChannelId;