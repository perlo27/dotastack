import React, { Component, PropTypes } from 'react'
import PartyList from '../../components/PartyList/PartyList'
import Filters from '../../components/Filters/Filters'
import './partylistpage.scss'
class PartyListPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="partylistPage">
                <Filters />
                <PartyList />
            </div>
        )
    }
}

export default PartyListPage
