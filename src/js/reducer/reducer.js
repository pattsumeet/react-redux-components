import { DATA_LOADED, DETAIL_LOADED } from '../../constants/action-types'
const initialState = {
    movies: [],
    details: [],
    loading: false
}

function reducer(state = initialState, action) {
    if (action.type === DATA_LOADED) {
        // return Object.assign({}, state, {
        //     movies: state.movies.concat(action.payload)
        // })
        return {...state.movies, movies: action.payload, loading: false}
    }

    if (action.type === DETAIL_LOADED) {
        return {...state.details, details: action.payload}
    }

    return state
}

export default reducer