import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCases=(casedata)=>{
return{
    type:actionTypes.RENDER_CASES,
    casedata:casedata
}

}

export const fetchCases=()=>{
    return dispatch=>{
    // let interval=setInterval(()=>{
        axios.get('https://corona.lmao.ninja/all')
    .then(response=>{
        dispatch(renderCases(response.data));
    })
    .then(error=>{
        console.log("sorry")
    })
// },5000);
}
} 