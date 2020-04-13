import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderMap=(mapdata)=>{
return{
    type:actionTypes.RENDER_MAP,
    mapdata:mapdata
}

}

export const fetchMapData=()=>{
    return dispatch=>{
    axios.get('https://www.trackcorona.live/api/countries/')
    .then(response=>{
        dispatch(renderMap(response.data.data));
    })
    .then(error=>{
        console.log("sorry")
    })
    }
} 