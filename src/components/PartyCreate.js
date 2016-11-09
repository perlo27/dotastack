import React from 'react'
import {Component, PropTypes} from 'react'
import { createPatry } from '../AC/createPatry'
import { connect } from 'react-redux'

class PartyCreate extends Component {

  state = {
    partyname: "",
    players: [],
    decription: "",
    id: null,
    averagemmr: null
  }

  componentDidMount() {
    const {user} = this.props
    console.log('update ', user)
    this.setState({
      players: [user]
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.createPatry(this.state)
  }
  handleChange = field => ev => this.setState({
      [field]: ev.target.value
  })

  render() {

    return (
      <form onSubmit = {this.handleSubmit}>
        PartyName: <input type="text" value={this.state.partyname} onChange = {this.handleChange('partyname')}/>
        <br/>
        Description: <input type="text" value={this.state.decription} onChange = {this.handleChange('decription')}/>
        <br/>
        <input type = "submit"/>
      </form>
  )

  }
}

export default connect(state => ({
  user: state.user
}), { createPatry })(PartyCreate)
