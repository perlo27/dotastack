import React from 'react'
import { Component, PropTypes } from 'react'

class WaitList extends Component {


  render() {

    const {party, user} = this.props
    const invbtn = party.get('leader') == user.id ? <div><button>Invite</button><button>Decline</button></div> : null
    console.log(party.get('waitlist'))
    const body = party.get('waitlist').valueSeq().toArray().map( player => <li key={player.get('id')}><span>{player.get('nick')}</span>{invbtn}</li> )

    return (
      <div>
        {body}
      </div>
    )
  }
}

export default WaitList
