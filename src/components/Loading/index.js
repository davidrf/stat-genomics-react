import RefreshIndicator from 'material-ui/RefreshIndicator'
import React from 'react'

const size = 100
const top = 150
const determineLeft = () => {
  return Math.floor((window.innerWidth / 2) - (size / 2))
}

const Loading = () => (
  <RefreshIndicator
    left={determineLeft()}
    top={top}
    size={size}
    status="loading"
  />
)

export default Loading
