import React, { Component, PropTypes } from 'react'
import PartyPage from '../components/PartyPage'

class PartyLinkHandler extends Component {
    static propTypes = {

    };

    render() {
        console.log('render partylinkhandler--- id= ',this.props.params.id)
        return (
            <div>
                <PartyPage id={this.props.params.id}/>
            </div>
        )
    }
}

export default PartyLinkHandler
