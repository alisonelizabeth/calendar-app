import axios from 'axios'

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'

export const REQUEST_STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  ERROR: 'ERROR'
}

const EVENTS_API = 'http://localhost:3001/api/events'

export const requestEvents = () => ({
  type: FETCH_EVENTS_REQUEST,
  status: REQUEST_STATUS.IN_PROGRESS
})

export const receiveEventsSuccess = response => ({
  type: FETCH_EVENTS_SUCCESS,
  status: REQUEST_STATUS.DONE,
  data: response
})

export const receiveEventsError = error => ({
  type: FETCH_EVENTS_FAILURE,
  status: REQUEST_STATUS.ERROR,
  error
})

export const fetchEvents = () => (dispatch => {
  dispatch(requestEvents())
  return axios.get(EVENTS_API)
    .then(response => dispatch(receiveEventsSuccess(response.data)))
    .catch(error => dispatch(receiveEventsError(error)))
})
