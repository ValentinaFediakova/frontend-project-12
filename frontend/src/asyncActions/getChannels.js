import { getData } from '../utils'
import {
  channelsAddToState, 
} from '../actions/channels'
import {
  loadingsFailure,
  loadingStarted,
  loadingsSuccess,
} from '../actions/loading'

export const getDataForChannels = () => {
  return async (dispatch) => {
    try{
      dispatch(loadingStarted())
      const data = await getData()
      dispatch(channelsAddToState(data.channels))
      dispatch(loadingsSuccess())
    } catch (error) {
      console.log('ERROR !!!', error)
      dispatch(loadingsFailure(error))
    }
  }
}
