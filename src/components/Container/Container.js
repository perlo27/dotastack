import React from 'react'
import {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Authtorization from '../Authtorization/Authtorization'
import { Provider } from 'react-redux'
import store from '../../store'
import { Link } from 'react-router'
import './container.scss'

class Container extends Component {

  static PropTypes = {
    parties: PropTypes.array.isRequired
  }

  render() {
    const {parties} = this.props

    return (
      <Provider store={store}>
        <div className="cont">
          <Authtorization/>
          <ul>
            <li><Link to="/partylist">Party list</Link></li>
            <li><Link to="/createparty">Create party</Link></li>
            <li><Link to="/parties/1234412">Party 1 page</Link></li>
          </ul>
          {this.props.children}
        </div>

      </Provider>
    )
  }
}
export default Container
