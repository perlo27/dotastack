import React from 'react'
import {Component, PropTypes} from 'react'
import PartyList from './PartyList'
import PartyPage from './PartyPage'
import PartyCreate from './PartyCreate'
import { connect } from 'react-redux'
import Authtorization from './Authtorization'
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
          <Authtorization/>
          <ul>
            <li><Link to="/partylist">Party list</Link></li>
            <li><Link to="/createparty">Create party</Link></li>
            <li><Link to="/parties/1234412">Party 1 page</Link></li>
          </ul>
          <h3>some filters</h3>

          {this.props.children}
        </div>

      </Provider>
    )
  }
}
export default Container
