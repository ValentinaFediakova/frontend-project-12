const LOADING_STARTING = 'LOADING_STARTING'
const LOADING_SUCCESS = 'LOADING_SUCCESS'
const LOADING_FAILURE = 'LOADING_FAILURE'


const loading = (state = [], action) => {
  let loading
  switch(action.type){
    case LOADING_STARTING :
      loading = 'true'
      return {...state, loading}
    case LOADING_SUCCESS:
      loading = 'success'
      return {...state, loading}
    case LOADING_FAILURE:
      return {...state, errors: action.payload}
    default: 
      return state
  }
}

export default loading