import React from 'react'
import { Match } from 'react-router'
import Layout from 'components/Layout'
import HomeContainer from 'containers/HomeContainer'
import HomeFolderContainer from 'containers/HomeFolderContainer'
import FolderContainer from 'containers/FolderContainer'
import LogInContainer from 'containers/LogInContainer'
import NewFolderContainer from 'containers/NewFolderContainer'
import RedirectUnauthenticatedMatch from 'containers/RedirectUnauthenticatedMatch'
import SignUpContainer from 'containers/SignUpContainer'

const App = () => (
  <Layout>
    <Match exactly pattern="/" component={HomeContainer} />
    <Match pattern="/log-in" component={LogInContainer} />
    <Match pattern="/sign-up" component={SignUpContainer} />
    <RedirectUnauthenticatedMatch pattern="/home-folder" component={HomeFolderContainer} />
    <Match pattern="/folders/:folderId" render={matchProps => (
      matchProps.pathname === '/folders/new' ?
        <RedirectUnauthenticatedMatch pattern="/folders/new" component={NewFolderContainer} /> :
        <RedirectUnauthenticatedMatch pattern="/folders/:folderId" component={FolderContainer} />
    )}/>
  </Layout>
)

export default App
