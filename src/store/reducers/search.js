import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    countries:[],
    error:false
}

const searchCountries=(state,action)=>{
    let array=[];
    array=action.searchdata;
    return updateObject(state,{
        countries:array
    })
}

const searchCountriesFailed=(state,action)=>{
    return updateObject(state,{error:action.error})
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SEARCH_COUNTRIES:return searchCountries(state,action);
        case actionTypes.SEARCH_COUNTRIES_FAILED:return searchCountriesFailed(state,action);
        default:return state;
        
    }
}
export default reducer;
