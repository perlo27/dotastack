import React from 'react'
import {Component, PropTypes} from 'react'
import PartyList from './PartyList'
import PartyCreate from './PartyCreate'
import { connect } from 'react-redux'
import SignIn from './SignIn'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class Container extends Component {

  static PropTypes = {
    parties: PropTypes.array.isRequired
  }

  render() {
    const {parties} = this.props

    return (
      <Provider store={store}>
        <div>
          <SignIn/>
          <ul>
            <li><Link to="/partylist">Party list</Link></li>
            <li><Link to="/createparty">Create party</Link></li>
          </ul>
          <h3>some filters</h3>

          {this.props.children}
        </div>

      </Provider>
    )
  }
}
export default Container
