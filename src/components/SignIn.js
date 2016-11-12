import React from 'react'
import { Component, PropTypes } from 'react'
import { signIn } from '../AC/signIn'
import { connect } from 'react-redux'

class SignIn extends Component {

  render() {
    const { user } = this.props

    return user.nick ? <div><h4>{ user.nick } <span>MMR: { user.mmr }</span></h4>
    <button>Sign Out</button></div> : <button onClick={ this.handleSignIn }>Sign In</button>
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
  user: state.user
}), { signIn })(SignIn)
