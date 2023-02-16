export const loadingStarted = () => ({type: 'LOADING_STARTING'})
export const loadingsSuccess = () => ({type: 'LOADING_SUCCESS'})
export const loadingsFailure = (payload) => ({type: 'LOADING_FAILURE', payload})