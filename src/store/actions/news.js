import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderNews=(newsdata)=>{
return{
    type:actionTypes.RENDER_NEWS,
    newsdata:newsdata
}

}

export const fetchNews=()=>{
    var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=fe65fa7f714044a190b92aa5808223ef';
    return dispatch=>{
    axios.get(url)
    .then(response=>{
        dispatch(renderNews(response.data.data.rows));
    })
    .then(error=>{
        console.log("sorry")
    })
    }
} 