import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCharts=(chartdata)=>{
return{
    type:actionTypes.RENDER_CHARTS,
    chartdata:chartdata
}

}

export const fetchCharts=()=>{
    return dispatch=>{
   
    axios.get('https://corona.lmao.ninja/v2/historical/all')
    .then(response=>{
        dispatch(renderCharts(response.data));
    })
    .then(error=>{
        console.log("sorry")
    })
}
} 