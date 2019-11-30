import { GET_APP_DATA } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APP_DATA:
      return action.payload
    default:
      return state
  }
}
