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