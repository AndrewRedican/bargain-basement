import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions'
import * as types from '../src/actions/types'
import * as appData from '../src/reducers/appData'
import * as cartData from '../src/reducers/cartData'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('openCart', () => {
  it('opens the cart', () => {
    // arrange
    const store = mockStore(cartData.initialState)
    // act
    const action = store.dispatch(actions.openCart())
    //assert
    expect(action).toEqual({ type: types.OPEN_CART })
  })
})

describe('closeCart', () => {
  it('closes the cart', () => {
    // arrange
    const store = mockStore(cartData.initialState)
    // act
    const action = store.dispatch(actions.closeCart())
    //assert
    expect(action).toEqual({ type: types.CLOSE_CART })
  })
})

describe('addToCart', () => {
  it('adds a package into the cart', () => {
    // arrange
    const store = mockStore(cartData.initialState)
    // act
    const action = store.dispatch(actions.addToCart('name', 1))
    //assert
    expect(action).toEqual({
      type: types.ADD_TO_CART,
      name: 'name',
      id: 1
    })
  })
})

describe('removeFromCart', () => {
  it('removes package from cart', () => {
    // arrange
    const store = mockStore(cartData.initialState)
    // act
    const action = store.dispatch(actions.removeFromCart('name', 1))
    //assert
    expect(action).toEqual({
      type: types.REMOVE_FROM_CART,
      name: 'name',
      id: 1
    })
  })
})

describe('onInputChange', () => {
  it('should update the filter value', () => {
    // arrange
    const event = { target: { value: 'string' } }
    const store = mockStore(appData.initialState)
    // act
    const action = store.dispatch(actions.onInputChange(event))
    // assert
    expect(action).toEqual({
      type: types.SET_INPUT_VALUE,
      text: 'string'
    })
  })
})

describe('setSortAscending', () => {
  it('should sort packages ascending order', () => {
    // arrange
    const store = mockStore(appData.initialState)
    // act
    const action = store.dispatch(actions.setSortAscending(true))
    // assert
    expect(action).toEqual({
      type: types.SORT_PACKAGE_ASCENDING,
      bool: true
    })
  })
})
