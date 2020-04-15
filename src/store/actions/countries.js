import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCountries=(countrydata)=>{
return{
    type:actionTypes.RENDER_COUNTRIES,
    countrydata:countrydata
}

}


export const fetchCountriesFailed=()=>{
    return {
        type:actionTypes.FETCH_COUNTRIES_FAILED
    }
}


// export const searchCountries=(searchdata)=>{
//     return{
//         type:actionTypes.SEARCH_COUNTRIES,
//          searchdata:searchdata
//         }
// }


export const fetchCountries=()=>{
    return dispatch=>{
    axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search')
    .then(response=>{
        dispatch(renderCountries(response.data.data.rows));
    })
    .catch(error=>{
        dispatch(fetchCountriesFailed());
    })
    }
} 

// export const fetchCountriesOnSearch=(value)=>{
//     return dispatch=>{
//         axios.get(`https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${value}`)
//         .then(response=>{
//             dispatch(searchCountries(response.data.data.rows[0]));
//         })
//         .then(error=>{
//             console.log("error");
//         })
//     }
// }