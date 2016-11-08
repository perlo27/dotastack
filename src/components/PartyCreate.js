import React from 'react'
import {Component, PropTypes} from 'react'
import { createPatry } from '../AC/createPatry'
import { connect } from 'react-redux'

class PartyCreate extends Component {

  handleCreate = () => {
    const { createPatry } = this.props
    createPatry()
  }

  render() {
    return (<button onClick = {this.handleCreate}>new party</button>)
  }
}

export default connect(null, { createPatry })(PartyCreate)
