import React from 'react'
import { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import Slider from './Slider'

class FiltersForm extends Component {

  render() {
    return(
      <form style={{marginTop: '20px'}}>
        <div>
          <label htmlFor="carry">Carry</label>
          <Field name="carry" id="carry" component="input" type="checkbox" />
          <label htmlFor="mid">Mid</label>
          <Field name="mid" id="mid" component="input" type="checkbox" />
          <label htmlFor="off">Offlane</label>
          <Field name="off" id="off" component="input" type="checkbox" />
          <label htmlFor="supp">Support</label>
          <Field name="supp" id="supp" component="input" type="checkbox" />
        </div>

        <div style={{margin: "10px"}}>
        <Field name="rait" component="select">
            <option value="all" key="all">All games</option>
            <option value="raiting" key="raiting">Raiting games</option>
            <option value="noraiting" key="noraiting">Not raiting games</option>
        </Field>
        </div>

        <div>
          <Field name="mmrRange" component={Slider} />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PartyListFilters'
})(FiltersForm)
