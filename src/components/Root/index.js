import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import App from 'components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)

// eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Root.propTypes = {
    store: PropTypes.object.isRequired
  }
}

export default Root
