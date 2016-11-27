import React from 'react'
import { Component, PropTypes } from 'react'
import { signIn, signOut } from '../AC/auth'
import { connect } from 'react-redux'
import { leaveParty } from '../AC/party'

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

  handleSignOut = () => {
    const {user, signOut, parties, leaveParty} = this.props
    const partyWithUser = parties.findKey(v => v.get('players').has(user.id))

    if ( partyWithUser ) leaveParty(user, partyWithUser)
    signOut()
  }

  handleSignIn = () => {
    const {signIn} = this.props
    signIn({
      nick: "petuna",
      mmr: 2223,
      role: "mid",
      id: "sfffffff",
      waitlist: []
    })
  }
}


export default connect(state => ({
  user: state.user,
  parties: state.parties
}), { signIn, signOut, leaveParty })(Authtorization)
