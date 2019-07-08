import React, {Component} from 'react'
import MovieCard from './movieCard/movieCard'
import { connect } from "react-redux";
import { getData } from '../js/actions/action'
import Search from './search/search'

// import {Link} from "react-router-dom"
// import { stat } from 'fs';

class Home extends Component {
    // constructor() {
    //     super()
    //     // this.state = {
    //     //     loading: false
    //     // }
    // }

    componentDidMount() {
        //this.props.setLoading(true);
        // calling the new action creator
        
        this.props.getData()

        // this.setState({loading:true})   
        // fetch("http://www.omdbapi.com/?s=avengers&apikey=63cc4dd6")
        // .then(response => response.json())
        // .then(response => {
        //     //console.log(response.Search)
        //     this.setState({
        //         movies: response.Search,
        //         loading: false
        //     })
        //     //console.log(this.state.movies)
        // })
    }
    
    render() {
        // console.log(this.props.movies)
        // console.log("loading",this.props.loading)
        // const text = this.props.loading ? "Loading..." : ""
        const {movies, loading} = this.props;
        return (
            <div>
                {/* <label>{text}</label> */}
                {loading && 
                    "Loading"
                }
                {movies && movies.length > 0 }
                    <Search />
                
                
                {movies && movies.length > 0 &&
                    movies.map((movie,index) => {
                        return <MovieCard movie={movie} key={index} />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
        loading: state.loading
    }
}

function mapDispatchToProps() {
    return {
        getData
    }
}

export default connect(mapStateToProps, mapDispatchToProps() )(Home)