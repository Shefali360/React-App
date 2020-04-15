import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCases=(casedata)=>{
return{
    type:actionTypes.RENDER_CASES,
    casedata:casedata
}

}

export const fetchCasesFailed=(error)=>{
    return{
        type:actionTypes.FETCH_CASES_FAILED
    }
}

export const fetchCases=()=>{
    return dispatch=>{
    // let interval=setInterval(()=>{
        axios.get('https://corona.lmao.ninja/all')
    .then(response=>{
        dispatch(renderCases(response.data));
    })
    .catch(error=>{
        dispatch(fetchCasesFailed(error));
    })
// },5000);
}
} 