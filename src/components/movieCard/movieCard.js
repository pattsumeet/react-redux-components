import React, {Component} from 'react'
import {Link} from "react-router-dom"
import '../detail/detail.css'

class MovieCard extends Component {
    constructor() {
        super()
        // this.state = {
        //     details: "",
        //     key: ""
        // }
    }

    render() {
        //console.log(this.props.movie)
        const link = "/detail/"+this.props.movie.imdbID
        const {Actors, Awards} = this.props.movie
        //console.log(Actors)
        let actorTag, awardsTag
        if(Actors) {
            actorTag = <p>Actors: {Actors}</p>
        }
        if(Awards) {
            awardsTag = <p>Awards: {Awards}</p>
        }
        return (
            <div>
                <div className="card cardClass">
                        <Link to={link}>
                            <img src={this.props.movie.Poster} alt="Avatar" />
                        </Link>
                        <div className="container">
                            <Link to={link}>
                                <h4><b>{this.props.movie.Title}</b></h4> 
                            </Link>
                            <p>Year {this.props.movie.Year}</p>
                            
                            {actorTag}
                            {awardsTag}
                        </div>
                </div>
            </div>
        )
    }
}

export default MovieCard