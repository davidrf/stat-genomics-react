import React from 'react'

const Home = ({ email }) => (
  <div>
    <h1>Home page</h1>
    {email && <h2>Logged in as {email}</h2>}
  </div>
)

export default Home
