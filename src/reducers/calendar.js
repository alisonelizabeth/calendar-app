import lodash from 'lodash'
import moment from 'moment'
import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE } from '../actions'

const INITIAL_STATE = {
  status: undefined,
  error: undefined,
  events: {}
}

const calendar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_EVENTS_REQUEST:
    return Object.assign({}, state, {
      status: action.status
    })
  case FETCH_EVENTS_SUCCESS:
    return Object.assign({}, state, {
      status: action.status,
      events: lodash.keyBy(action.data.data, data => moment(data.launch_date).format('YYYY-MM-DD'))
    })
  case FETCH_EVENTS_FAILURE:
    return Object.assign({}, state, {
      status: action.status,
      error: action.error
    })
  default:
    return state
  }
}
export default calendar
