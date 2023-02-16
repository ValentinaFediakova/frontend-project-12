const MESSAGES_ADD = 'MESSAGES_ADD'
const MESSAGES_REMOVE = 'MESSAGES_REMOVE'

const messages = (state = [], action) => {
  switch(action.type){
    case MESSAGES_ADD:
      return {...state, items:[...state.items, ...action.payload]}
    case MESSAGES_REMOVE: 
      return {...state, messages: state.messages.filter(({id}) => id !== action.payload)}
    default: 
      return state
  }
}

export default messages;