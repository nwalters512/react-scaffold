import { DEFAULT } from '../constants/ActionTypes'

const defaultState = {
  count: 0,
}

const incrementCount = (state) => (Object.assign({}, state, {
  count: state.count + 1,
}))

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEFAULT:
      return incrementCount(state)
    default:
      return state
  }
}

export default reducer
