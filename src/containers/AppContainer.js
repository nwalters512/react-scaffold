import { connect } from 'react-redux'
import App from '../components/App'
import { defaultAction } from '../actions'

const mapStateToProps = (state) => ({
  count: state.defaultState.count,
})

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(defaultAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
