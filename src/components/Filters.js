import React from 'react'
import { Component, PropTypes } from 'react'
import Slider from './Slider'
import FiltersForm from './FiltersForm'
import { connect } from 'react-redux'


const initialValues = {
  carry: true,
  mid: true,
  supp: true,
  off: true,
  rait: "all",
  mmrRange: [2000, 5000]
}

class Filters extends Component {

  render() {
    const { userMMR } = this.props

    return (
      <div style={{ width: '300px', marginLeft: '20px' }}>
        <FiltersForm initialValues={initialValues}/>
      </div>
    )
  }
}

export default connect(state => ({
  userMMR: state.user.mmr
}))(Filters)
