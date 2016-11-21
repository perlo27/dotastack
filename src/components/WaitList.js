import React from 'react'
import { Component, PropTypes } from 'react'
import WaitListButtons from './WaitListButtons'

class WaitList extends Component {


  render() {

    const {party, user} = this.props
    const leader = party.get('leader') == user.id
    console.log(party.get('waitlist'))
    const body = party.get('waitlist').valueSeq().toArray().map( player =>
      <li key={player.get('id')}>
        <span>{player.get('nick')}</span>
        <WaitListButtons leader={leader} player={player} party={party}/>
      </li>
    )

    return (
      <div>
        {body}
      </div>
    )
  }
}

export default WaitList
