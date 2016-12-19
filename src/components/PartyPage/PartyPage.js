import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import WaitList from '../WaitList'
import { leaveParty, deleteParty } from '../../AC/party'

class PartyPage extends Component {
  handleLeave = ev => {
    const {party, user, leaveParty, deleteParty} = this.props
    leaveParty(user, party.get('id'))

    if ( user.id == party.get('leader') ) deleteParty(party.get('id'))

  }
  render() {
    const {party, user} = this.props
    const players = party.get('players').toArray().map( player =>
      <li key={player.id}>{player.nick}, mmr:{player.mmr}</li>
    )
    const WaitListShower = party.get('players').size < 5 ?
      <div>
        <h2>WAITLIST</h2>
        <WaitList party={party} user={user}/>
      </div>
       : null

    return (
      <div>
        <Link to ="partylist" onClick={this.handleLeave}>Leave party</Link>
        <h2>{party.get('partyname')}, mmr: {party.get('averagemmr')} </h2>
        <ul>{players}</ul>
        {WaitListShower}
      </div>
    )
  }
}

export default connect((state, { id }) => ({
  party: state.parties.find(party => party.get('id') == id),
  user: state.user
}), { leaveParty, deleteParty })(PartyPage)
