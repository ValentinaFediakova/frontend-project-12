const USER_ADD = 'USER_ADD'

const user = (state = {}, action) => {
  switch(action.type){
    case USER_ADD:
      return {...state, username: action.payload }
    default: 
      return state
  }
}

export default user
