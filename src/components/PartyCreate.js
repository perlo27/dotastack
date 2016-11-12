import React from 'react'
import {Component, PropTypes} from 'react'
import { createPatry } from '../AC/createPatry'
import { connect } from 'react-redux'
import history from '../history'

class PartyCreate extends Component {

  state = {
    partyname: "",
    description: ""
  }


  handleSubmit = ev => {
    const {user} = this.props
    ev.preventDefault()
    this.props.createPatry(this.state, user)
  }
  handleChange = field => ev => this.setState({
      [field]: ev.target.value
  })

  render() {

    return (
      <form onSubmit = {this.handleSubmit}>
        PartyName: <input type="text" value={this.state.partyname} onChange = {this.handleChange('partyname')}/>
        <br/>
        Description: <input type="text" value={this.state.description} onChange = {this.handleChange('description')}/>
        <br/>
        <input type = "submit"/>
      </form>
  )

  }
}

export default connect(state => ({
  user: state.user
}), { createPatry })(PartyCreate)
