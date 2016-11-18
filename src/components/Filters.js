import React from 'react'
import {Component, PropTypes} from 'react'
import Slider from 'rc-slider'
import { connect } from 'react-redux'
import { changeMmrFilter } from '../AC/filters'
require('rc-slider/assets/index.css')

const handleStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
  padding: '2px',
  border: '2px solid #abe2fb',
  borderRadius: '3px',
  background: '#fff',
  fontSize: '14px',
  textAlign: 'center',
}

class CustomHandle extends Component {


  render() {
    const style = Object.assign({ left: `${this.props.offset}%` }, handleStyle)
    return (
      <div style={style}>{this.props.value}</div>
    )
  }
}

class Filters extends Component {

  marks = {
    1000: '1000',
    5000: '5000'
  }
  onSliderChange = (value) => {
    const { changeMmrFilter } = this.props
    changeMmrFilter(value)
  }

  render() {
    const { mmrRange } = this.props
    console.log(mmrRange[0])

    return (
      <div style={{ width: '300px', marginLeft: '20px' }}>
        <label style={{marginBottom: '15px', display: 'block'}}>MMR range</label>
        <Slider range defaultValue={[2000, 4000]} min={+this.marks[1000]} max={+this.marks[5000]}
          onChange={this.onSliderChange} marks={this.marks} handle={<CustomHandle />}/>
      </div>
    )
  }
}

export default connect(state => ({
  mmrRange: state.filters.get('mmr')
}), { changeMmrFilter })(Filters)
