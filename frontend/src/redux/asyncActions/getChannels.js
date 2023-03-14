import { getData } from '../../utils'
import {
  channelsAdd, 
} from '../actions/channels.action'
import {
  initDateLoadingFail,
  initDataLoadingStart,
  initDataLoadingSuccess,
} from '../actions/loading.action'
import {
  messagesAdd,
} from '../actions/messages.action'

export const getDataForChannels = () => {
  return async (dispatch) => {
    try{
      dispatch(initDataLoadingStart())
      const data = await getData()
      console.log('data', data)
      dispatch(channelsAdd(data.channels))
      dispatch(messagesAdd(data.messages))
      dispatch(initDataLoadingSuccess())
    } catch (error) {
      console.log('ERROR !!!', error)
      dispatch(initDateLoadingFail(error))
    }
  }
}
