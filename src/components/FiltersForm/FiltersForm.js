import React from 'react'
import { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import Slider from '../Slider'
import './filtersform.scss'

class FiltersForm extends Component {

  render() {
      return <form className="filters-form">
              <div className="filters-role">
                  <div className="filters-role-label">
                      <label>Choose role</label>
                  </div>
                  <div className="filters-role-options">
                      <div>
                          <div>
                              <Field name="carry" id="carry" component="input" type="checkbox"/>
                              <label htmlFor="carry">Carry</label>
                          </div>
                          <div>
                              <Field name="mid" id="mid" component="input" type="checkbox"/>
                              <label htmlFor="mid">Mid</label>
                          </div>
                      </div>
                      <div>
                          <div>
                              <Field name="off" id="off" component="input" type="checkbox"/>
                              <label htmlFor="off">Offlane</label>
                          </div>
                          <div>
                              <Field name="supp" id="supp" component="input" type="checkbox"/>
                              <label htmlFor="supp">Support</label>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="filters-rait">
                  <label htmlFor="rait">Type of games:</label>
                  <Field name="rait" component="select">
                      <option value="all" key="all">All games</option>
                      <option value="raiting" key="raiting">Raiting games</option>
                      <option value="noraiting" key="noraiting">Not raiting games</option>
                  </Field>
              </div>
              <div className="filters-range">
                  <Field name="mmrRange" component={Slider}/>
              </div>
          </form>

  }
}

export default reduxForm({
    form: 'PartyListFilters'
})(FiltersForm)

