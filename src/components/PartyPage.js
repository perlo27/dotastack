import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { leaveParty } from '../AC/leaveParty'

class PartyPage extends Component {
  handleLeave = ev => {
    const {party, user, leaveParty} = this.props
    leaveParty(user, party.get('id'))
  }
  render() {

    const {party} = this.props
    console.log(party)
    const players = party.get('players').toArray().map( player => <li key={player.id}>{player.nick}, mmr:{player.mmr}</li>)
    return (
      <div>
        <Link to ="partylist" onClick={this.handleLeave}>Leave party</Link>
        <h2>{party.partyname}</h2>
        <ul>{players}</ul>

      </div>
    )
  }
}

export default connect((state, { id }) => ({
  party: state.parties.find(party => party.get('id') == id),
  user: state.user
}), { leaveParty })(PartyPage)
