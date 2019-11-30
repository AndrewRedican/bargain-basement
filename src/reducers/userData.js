import Types from '../actions/types'

const { GET_USER_DATA } = Types

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return action.payload
  }
  return state
}
