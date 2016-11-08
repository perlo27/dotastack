import React from 'react'
import { Component, PropTypes } from 'react'
import PartyLink from './PartyLink'

class PartyList extends Component {
  render() {

    const {parties} = this.props
    const body = parties.map(party => <PartyLink party={party} key={party.id}/>)

    return (
      <div>
        {body}
      </div>
    )
  }
}

export default PartyList
