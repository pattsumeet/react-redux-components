import React from 'react'
import {getData} from '../../js/actions/action'
import { connect } from "react-redux";

function Search(props) {
    function searchHandler(event) {
        event.preventDefault()
        props.getData(event.target.value)
        //console.log(event.target.value)
    }
    //console.log(props.getData)
    //console.log(props)
    return (
        <div>
            <div>
                {/* <input name="search" type="text" onChange={searchHandler.bind(this)} placeholder="Search.."/> */}
                <input name="search" type="text" onChange={searchHandler} placeholder="Search.." />
            </div>
        </div>
    )
}

function mapDispatchToProps() {
    return {
        getData
    }
}

export default connect(null, mapDispatchToProps())(Search)