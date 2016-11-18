import React from 'react'
import { Component, PropTypes } from 'react'
import Slider from './Slider'
import { connect } from 'react-redux'
import { changeMmrFilter } from '../AC/filters'

class Filters extends Component {

  render() {
    const { mmrRange, changeMmrFilter, userMMR } = this.props
    console.log(mmrRange[0])

    return (
      <div style={{ width: '300px', marginLeft: '20px' }}>
        <Slider changeMmrFilter = { changeMmrFilter } userMMR = { userMMR }/>
      </div>
    )
  }
}

export default connect(state => ({
  mmrRange: state.filters.get('mmr'),
  userMMR: state.user.mmr
}), { changeMmrFilter })(Filters)
