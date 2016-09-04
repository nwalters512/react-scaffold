import * as types from '../../constants/ActionTypes'
import * as actions from '../index'

describe('actions', () => {
  it('should create the default action', () => {
    const expectedAction = {
      type: types.DEFAULT,
    }
    expect(actions.defaultAction()).toEqual(expectedAction)
  })
})
