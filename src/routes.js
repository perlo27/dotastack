import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import history from './history'
import Container from './components/Container'
import PartyList from './components/PartyList'
import PartyCreate from './components/PartyCreate'
import SignIn from './components/SignIn'

export default <Router history={history}>
  <Route path="/" component={Container}>
    <Route path="partylist" component = {PartyList}></Route>
    <Route path="createparty" component = {PartyCreate}></Route>
  </Route>
</Router>
