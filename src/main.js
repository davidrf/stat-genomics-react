import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'components/Root'
import configureStore from 'store/configureStore'
import { readLocalStorage } from 'utilities/localStorage'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
const store = configureStore(readLocalStorage())
ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
