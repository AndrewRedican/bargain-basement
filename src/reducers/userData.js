import { GET_USER_DATA } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return action.payload
    default:
      return state
  }
}
