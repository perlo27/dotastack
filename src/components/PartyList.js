import React from 'react'
import { Component, PropTypes } from 'react'
import PartyLink from './PartyLink'
import { connect } from 'react-redux'


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

export default connect(state => {
  const formvalues = state.form.PartyListFilters.values
  const mmrRange = formvalues.mmrRange
  const selectedRoles = [formvalues.carry && "carry", formvalues.mid && "mid", formvalues.supp && "supp", formvalues.off && "off"]

  const filteredParties = state.parties.filter( v => {
    const mmrfilter = v.get('averagemmr') >= mmrRange[0] && v.get('averagemmr') <= mmrRange[1]
    const roles = v.get('neededroles').filter(v => selectedRoles.indexOf(v) != -1)
    console.log(roles)
    return  !!roles.length && mmrfilter
  }

  )
  console.log('---FILTERED PARTIES---',filteredParties)
  return {
    parties: filteredParties.valueSeq().toArray()
  }
}
)(PartyList)
