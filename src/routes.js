import React from 'react'
import { Route } from 'react-router'
import App from './App' /* Main entry of all requests */

export default (
  <Route component={App}>
    <Route path='/blog/page/:page'  />
    <Route path='/community/resource/:id'  />
    <Route path='/community/submit'  />
    <Route path='access_token=:token' />
    <Route path='*'/>
  </Route>
)
