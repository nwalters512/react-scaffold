import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import reducer from './reducers'

const store = createStore(reducer, compose(
  window.devToolsExtension && window.devToolsExtension()
))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('content')
)
