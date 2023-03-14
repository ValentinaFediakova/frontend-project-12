import { USER_ADD } from '../actionTypes/user.actionType'

const user = (state = {}, action) => {
  switch(action.type){
    case USER_ADD:
      return {...state, username: action.payload }
    default: 
      return state
  }
}

export default user
