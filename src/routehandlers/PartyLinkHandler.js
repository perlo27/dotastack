import React, { Component, PropTypes } from 'react'
import PartyPage from '../components/PartyPage/PartyPage'

class PartyLinkHandler extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <PartyPage id={this.props.params.id}/>
            </div>
        )
    }
}

export default PartyLinkHandler
