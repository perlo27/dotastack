import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { joinToPartyRequest } from '../AC/party'
import { Link } from 'react-router'
import { updateStorage } from '../store/helpers'

class PartyLink extends Component {

  static PropTypes = {
    party: PropTypes.object.isRequired
  }

  render() {

    const { party } = this.props
    let highLighter = null
    let button = <button onClick={this.handleJoin}>Join Party</button>
    if ( localStorage.getItem('user') ) {
      const WL = JSON.parse(localStorage.getItem('user')).waitlist
      if (WL.indexOf(party.get('id')) != -1 ){
        highLighter = {color: "green"}
        button = null
      }
    }

    const body = (
      <div>
        <h4 style={highLighter}> {party.get('partyname')}  <span>MMR: {party.get('averagemmr')}</span></h4>
        <h5> {party.get('description')} </h5>
        <ul> {party.get('players').toArray().map(player=>(
            <li key={player.id}><span>{player.nick}, mmr:{player.mmr}</span> {player.role}</li>))}
        </ul>
      </div>)

    return (
      <div>
        {body}
        {button}
      </div>
    )
  }

  handleJoin = (ev) => {
    const {joinToPartyRequest, user, party} = this.props
    if (user.nick) {
      joinToPartyRequest(user, party.get('id'))
      updateStorage('user', 'waitlist', party.get('id'), 'push')
    }
  }

}

export default connect(state => ({
  user: state.user
}), { joinToPartyRequest })(PartyLink)
