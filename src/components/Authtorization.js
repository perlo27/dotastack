import React from 'react'
import { Component, PropTypes } from 'react'
import { signIn, signOut } from '../AC/auth'
import { connect } from 'react-redux'
import { leaveParty, deleteParty } from '../AC/party'

class Authtorization extends Component {

  componentWillMount() {
    const {signIn} = this.props
    const user = localStorage.getItem('user')
    if (user) signIn(JSON.parse(user))
  }

  render() {
    const { user } = this.props

    return user.nick ? <div><h4>{ user.nick } <span>MMR: { user.mmr }</span></h4>
    <button onClick={ this.handleSignOut }>Sign Out</button></div> : <button onClick={ this.handleSignIn }>Sign In</button>
  }

  handleSignOut = ev => {
    const {user, signOut, parties, leaveParty} = this.props
    const pertyWithUser = parties.findKey(v => v.get('players').has(user.id))

    if ( pertyWithUser ) leaveParty(user, pertyWithUser)
    signOut()
  }

  handleSignIn = (ev) => {
    const {signIn} = this.props
    signIn({
      nick: 'petru4o',
      mmr: 1777,
      role: 'carry',
      id: '1sdfsfk5m56l'
    })
  }
}


export default connect(state => ({
  user: state.user,
  parties: state.parties
}), { signIn, signOut, leaveParty })(Authtorization)
