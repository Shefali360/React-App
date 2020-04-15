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


export const searchCountries=(searchdata)=>{
    return{
        type:actionTypes.SEARCH_COUNTRIES,
         searchdata:searchdata
        }
}


export const fetchCountries=()=>{
    return dispatch=>{
    axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search')
    .then(response=>{
        dispatch(renderCountries(response.data.data.rows));
    })
    .then(error=>{
        dispatch(fetchCountriesFailed());
    })
    }
} 

export const fetchCountriesOnSearch=(value)=>{
    return dispatch=>{
        axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?query=${value}')
        .then(response=>{
            dispatch(searchCountries(response.data.data.rows));
        })
        .then(error=>{
            console.log("error");
        })
    }
}