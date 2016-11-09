import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { joinToParty } from '../AC/joinToParty'
import { Link } from 'react-router'

class PartyLink extends Component {

  static PropTypes = {
    party: PropTypes.object.isRequired
  }

  render() {

    const {party} = this.props
    const body = (
      <div>
        <h4> {party.partyname}  <span>MMR: {party.averagemmr}</span></h4>
        <ul> {party.players.map(player=>(
            <li key={player.id}><span>{player.nick}, mmr:{player.mmr}</span> {player.role}</li>))}
        </ul>
      </div>)

    return (
      <div>
        {body}
        <Link to={`/parties/${party.id}`} onClick={this.handleJoin}>Join Party</Link>
      </div>
    )
  }

  handleJoin = (ev) => {
    const {joinToParty, user, party} = this.props
    if (user.nick) joinToParty(user, party.id)
  }

}

export default connect(state => ({
  user: state.user
}), { joinToParty })(PartyLink)
