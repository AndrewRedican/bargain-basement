import {
  STORE_PACKAGES,
  STORE_PACKAGE,
  STORE_FILE_META,
  SET_INPUT_VALUE,
  SORT_PACKAGE_ASCENDING
} from '../actions/types'

const initialState = {
  packages: {},
  files: {},
  inputValue: '',
  sortAscending: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PACKAGES:
      return {
        ...state,
        packages: {
          ...state.packages,
          ...action.packages.data
        }
      }
    case STORE_PACKAGE:
      return {
        ...state,
        packages: {
          ...state.packages,
          [action.id]: action.package.data
        }
      }
    case STORE_FILE_META:
      return {
        ...state,
        files: {
          ...state.files,
          [action.key]: {
            ...state.files[action.key],
            ...action.file
          }
        }
      }
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.text
      }
    case SORT_PACKAGE_ASCENDING:
      return {
        ...state,
        sortAscending: action.bool
      }
    default:
      return state
  }
}
