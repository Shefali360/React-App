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
    // let interval=setInterval(()=>{
        axios.get('https://corona.lmao.ninja/v2/historical')
    .then(response=>{
        dispatch(renderCharts(response.data.timeline));
    })
    .then(error=>{
        console.log("sorry")
    })
// },5000);
}
} 