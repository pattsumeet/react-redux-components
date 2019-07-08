import React from 'react'
import MovieCard from '../movieCard/movieCard'

function DetailPage(props) {
    //console.log(props)
    const {detail} = props
    return(
        <div>
            <MovieCard movie={detail}  />
            {/* {detail.Title}
            {detail.Year} */}
        </div>
    )
}

export default DetailPage