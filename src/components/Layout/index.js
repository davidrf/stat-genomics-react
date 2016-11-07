import React, { PropTypes } from 'react'
import HeaderContainer from 'containers/HeaderContainer'
import DevTools from 'containers/DevTools'

// eslint-disable-next-line no-undef
let devToolComponent = __DEVELOPMENT__ && <DevTools />

const Layout = ({ children }) => (
  <div>
    <HeaderContainer />
    <div className="container">
      {children}
      {devToolComponent}
    </div>
  </div>
)

// eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
}

export default Layout
