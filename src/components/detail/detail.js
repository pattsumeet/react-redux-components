import React, {Component} from 'react'
import DetailPage from './detailPage'
import { connect } from "react-redux";
import { getDetails } from '../../js/actions/action'

class Detail extends Component {
    constructor({match}) {
        super()
        //console.log(match.params.id)
        // this.state= {
        //     detail: [],
        //     loading: false
        // }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id)
        this.props.getDetails(this.props.match.params.id);

        // this.setState({loading:true})   
        // const url = "http://www.omdbapi.com/?i="+this.props.match.params.id+"&apikey=63cc4dd6"
        // fetch(url)
        // .then(response => response.json())
        // .then(response => {
        //     // console.log(response)
        //     this.setState({
        //         detail: response,
        //         loading: false
        //     })
        // })
    }

    render() {
        //const text = this.state.loading ? "Loading..." : ""
        //console.log(this.props.details)
        const {details} = this.props
        return (
            <div>
                {/* <label>{text}</label> */}
                {details && 
                    <DetailPage detail={details} />
                }
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log(state.details)
    return {
        details: state.details
    }
}

export default connect(mapStateToProps, {getDetails} )(Detail)