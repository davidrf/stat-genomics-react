import React from 'react'
import { Match } from 'react-router'
import Layout from 'components/Layout'
import HomeContainer from 'containers/HomeContainer'
import LogInContainer from 'containers/LogInContainer'
import SignUpContainer from 'containers/SignUpContainer'

const App = () => (
  <Layout>
    <Match exactly pattern="/" component={HomeContainer} />
    <Match pattern="/log-in" component={LogInContainer} />
    <Match pattern="/sign-up" component={SignUpContainer} />
  </Layout>
)

export default App
