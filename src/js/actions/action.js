import { DATA_LOADED, DETAIL_LOADED } from '../../constants/action-types'

export function getData(search = 'avengers') {
    return function(dispatch) {
      //console.log('in here')
      return fetch("http://www.omdbapi.com/?s="+search+"&apikey=63cc4dd6")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: DATA_LOADED, payload: json.Search });
        });
    };
  }

export function getDetails(imdbId) {
    return function(dispatch) {
      let url = "http://www.omdbapi.com/?i="+imdbId+"&apikey=63cc4dd6";
        return fetch(url)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: DETAIL_LOADED, payload: json });
          });
      };
}
