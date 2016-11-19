import React from 'react'
import { Component, PropTypes } from 'react'
import Slider from 'rc-slider'
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

  render() {
    const { userMMR } = this.props

    const marks = {
      0: 0,
      10000: 10000
    }
    console.log(marks)
    return (
      <div>
        <label style={{marginBottom: '15px', display: 'block'}}>Select MMR range you are interested for</label>
        <Slider range defaultValue={[2000, 5000]} min={0} max={10000}
          onChange={this.props.input.onChange} marks={marks} handle={<CustomHandle />}/>
      </div>
    )
  }
}

export default SliderComponent
