import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import history from './history'
import Container from './components/Container'
import PartyList from './components/PartyList'
import PartyCreate from './components/PartyCreate'

import PartyIndexPage from './routehandlers/PartyIndexPage'
import PartyLinkHandler from './routehandlers/PartyLinkHandler'
import { checkAuth } from './store/helpers'
import MessageHandler from './components/MessageHandler'

const onEnter = (nextState, replace) => !checkAuth() && replace('/messages?message=Sign in through steam please');

const routes = (
	<Router history={history}>
		<Route path="/" component={Container}>
			<Route path="partylist" component={PartyList}/>
			<Route path="createparty" component={PartyCreate} onEnter={onEnter}/>
			<Route path="parties/:id" component={PartyLinkHandler} onEnter={onEnter}/>
			<Route path="messages" component={MessageHandler}/>
		</Route>
	</Router>
);

export default routes;
