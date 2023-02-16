import { createAction } from 'redux-actions';

export const userSet = createAction('SET_USER');
export const logOut = createAction('LOG_OUT');

// const setUser = (userObj) => {
//   return {
//       type: "SET_USER",
//       payload: userObj
//   }
// }

// const logOut = () => {
//   return {
//       type: "LOG_OUT"
//   }
// }

// export default {
//   setUser,
//   logOut
// }