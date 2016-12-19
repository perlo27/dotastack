import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { joinToPartyRequest } from '../../AC/party'
import { Link } from 'react-router'
import { updateStorage } from '../../store/helpers'
import './partylink.scss'

class PartyLink extends Component {

  static PropTypes = {
    party: PropTypes.object.isRequired
  }

  render() {

    const { party } = this.props
    let highLighter = null
    let button = <div className="joinbutton"><button onClick={this.handleJoin}>Join Party</button></div>
    if ( localStorage.getItem('user') ) {
      const WL = JSON.parse(localStorage.getItem('user')).waitlist
      if (WL.indexOf(party.get('id')) != -1 ){
        highLighter = {color: "green"}
        button = null
      }
    }

    const body = (
      <div className="partylink">
          <div className="partyname">
              <h4 style={highLighter}> {party.get('partyname')}  <span>MMR: {party.get('averagemmr')}</span></h4>
          </div>
          {/*<h5> {party.get('description')} </h5>*/}
          <div className="partyentries">
              <ul>{party.get('players').toArray().map(player=>(
                  <li key={player.id} title={`${player.nick}, mmr:${player.mmr}`}>{player.role}</li>))}
              </ul>
          </div>
          {button}
      </div>)

    return body
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
