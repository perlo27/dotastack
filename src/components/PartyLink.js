import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { joinToParty } from '../AC/party'
import { Link } from 'react-router'

class PartyLink extends Component {

  static PropTypes = {
    party: PropTypes.object.isRequired
  }

  render() {

    const {party} = this.props
    const body = (
      <div>
        <h4> {party.get('partyname')}  <span>MMR: {party.get('averagemmr')}</span></h4>
        <h5> {party.get('description')} </h5>
        <ul> {party.get('players').toArray().map(player=>(
            <li key={player.id}><span>{player.nick}, mmr:{player.mmr}</span> {player.role}</li>))}
        </ul>
      </div>)

    return (
      <div>
        {body}
        <Link to={`/parties/${party.get('id')}`} onClick={this.handleJoin}>Join Party</Link>
      </div>
    )
  }

  handleJoin = (ev) => {
    const {joinToParty, user, party} = this.props
    if (user.nick) joinToParty(user, party.get('id'))
  }

}

export default connect(state => ({
  user: state.user
}), { joinToParty })(PartyLink)
