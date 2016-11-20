import React, { Component, PropTypes } from 'react'
import PartyList from '../components/PartyList'
import Filters from '../components/Filters'

class PartyLinkHandler extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Filters />
                <PartyList />
            </div>
        )
    }
}

export default PartyLinkHandler
