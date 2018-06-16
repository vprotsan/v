import React from 'react'
import { Route } from 'react-router'
// import DynamicLayout from './phenomic'
import App from './App' /* Main entry of all requests */
// import Blog from './pages/Blog' /* Blog for pagination views */
// import Resource from './layouts/Resource' // layout for dynamic param based route
// import SubmitResource from './pages/Community/Submit'

export default (
  <Route component={App}>
    <Route path='/blog/page/:page'  />
    <Route path='/community/resource/:id'  />
    <Route path='/community/submit'  />
    <Route path='access_token=:token' />
    <Route path='*'/>
  </Route>
)
