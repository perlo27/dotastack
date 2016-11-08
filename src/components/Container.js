import React from 'react'
import {Component, PropTypes} from 'react'
import PartyList from './PartyList'

class Container extends Component {

  static PropTypes = {
    parties: PropTypes.array.isRequired
  }

  render() {
    const {parties} = this.props
    return (
      <div>
        <button>Sign In</button>
        <button>Create party</button>
        <h3>some filters</h3>
        <PartyList parties={parties} />
      </div>
    )
  }
}
export default Container
