import React from 'react'
import {Component, PropTypes} from 'react'
import PartyList from './PartyList'
import PartyCreate from './PartyCreate'
import { connect } from 'react-redux'
import SignIn from './SignIn'

class Container extends Component {

  static PropTypes = {
    parties: PropTypes.array.isRequired
  }

  render() {
    const {parties, user} = this.props
    const signin = user.nick ? <div><h4>{user.nick} <span>MMR: {user.mmr}</span></h4></div> : <SignIn/>

    return (
      <div>
        {signin}
        <button>Create party</button>
        <PartyCreate/>
        <h3>some filters</h3>
        <PartyList/>
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user
}))(Container)
