import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCases=(casedata)=>{
return{
    type:actionTypes.RENDER_CASES,
    casedata:casedata
}

}

export const fetchCases=()=>{
    dispatch=>{
    axios.post('https://corona.lmao.ninja/all')
    .then(response=>{
        console.log(response.data)
        dispatch(renderCases(response.data))
    })
    .then(error=>{
        console.log("sorry")
    })
    }
} 