import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { kickFromWL, inviteFromWL, clearWL } from '../AC/waitlist'

class WaitListButtons extends Component {

  handleInvite = () => {
    const { player, inviteFromWL, clearWL, party } = this.props
    inviteFromWL(player, party.get('id'))
    if (party.get('players').size == 4) clearWL(party.get('id'))
  }

  handleKick = () => {
    const { player, kickFromWL, party } = this.props
    kickFromWL(player, party.get('id'))
  }
  render() {
    const { leader, roles } = this.props
      console.log('player from WLBTNS ---- ', roles)
    const inviteButtons = 1
    const body = leader ?
        <div>
          <button onClick={this.handleInvite}>Invite</button>
          <button onClick={this.handleKick}>Decline</button>
        </div>
        : null


    return (
      <div>
        {body}
      </div>
    )
  }
}

export default connect(state => (
    {
        roles: state.user.role
    }
), { kickFromWL, inviteFromWL, clearWL} )(WaitListButtons)



