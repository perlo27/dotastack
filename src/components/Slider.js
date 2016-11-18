import React from 'react'
import {Component, PropTypes} from 'react'
import Slider from 'rc-slider'
//import { changeMmrFilter } from '../AC/filters'
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

class SliderComponent extends Component {

  onSliderChange = (value) => {
    const { changeMmrFilter } = this.props
    changeMmrFilter(value)
  }

  render() {
    const { userMMR } = this.props
    const minMark = userMMR ?  userMMR <= 2500 ? 0 : userMMR - 2500 : 1000
    const maxMark = userMMR ? userMMR + 2500 : 5000
    const marks = {
      [minMark]: minMark,
      [maxMark]: maxMark
    }
    console.log(marks)
    return (
      <div>
        <label style={{marginBottom: '15px', display: 'block'}}>MMR range</label>
        <Slider range defaultValue={[minMark, maxMark]} min={0} max={8000}
          onChange={this.onSliderChange} marks={marks} handle={<CustomHandle />}/>
      </div>
    )
  }
}

export default SliderComponent
