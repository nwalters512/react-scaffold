import deafultAction from '../default'
import { DEFAULT } from '../../constants/ActionTypes'

describe('default reducer', () => {
  it('defaults to the appropriate state', () => {
    const defaultState = {
      count: 0,
    }
    expect(deafultAction(undefined, {})).toEqual(defaultState)
  })

  it('increments the count', () => {
    const initialState = {
      count: 4,
    }
    const expectedState = {
      count: 5,
    }
    const action = {
      type: DEFAULT,
    }
    expect(deafultAction(initialState, action)).toEqual(expectedState)
  })
})
