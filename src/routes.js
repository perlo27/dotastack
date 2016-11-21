import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import history from './history'
import Container from './components/Container'
import PartyListPage from './routehandlers/PartyListPage'
import PartyCreate from './components/PartyCreate'
import PartyIndexPage from './routehandlers/PartyIndexPage'
import PartyLinkHandler from './routehandlers/PartyLinkHandler'
import { checkAuth, checkParty } from './store/helpers'
import MessageHandler from './components/MessageHandler'

const authReq = (nextState, replace) => {
	!checkAuth() && replace('/messages?message=Sign in through steam please')
}
const isInParty = (nextState, replace) => {
	!!checkParty() && replace(`/parties/${checkParty()}`)
}

const partyleave = (prevState) => {
	if (confirm('are u sure want to leave party?')) {
		const storageuser = JSON.parse(localStorage.getItem('user'))
		const user = Object.assign({}, storageuser, {inparty: ""})
		localStorage.removeItem('user')
		localStorage.setItem('user', JSON.stringify(user))
	}
}

const routes = (
	<Router history={history}>
		<Route path="/" component={Container}>
			<IndexRedirect to = "/partylist" />
			<Route path="partylist" component={PartyListPage} onEnter={isInParty}/>
			<Route path="createparty" component={PartyCreate} onEnter={authReq}/>
			<Route path="parties/:id" component={PartyLinkHandler} onEnter={authReq} onLeave={partyleave}/>
			<Route path="messages" component={MessageHandler}/>
		</Route>
	</Router>
);

export default routes
