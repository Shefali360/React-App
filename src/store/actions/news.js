import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderNews=(newsdata)=>{
return{
    type:actionTypes.RENDER_NEWS,
    newsdata:newsdata
}

}

export const fetchNews=()=>{
    let url='https://newsapi.org/v2/top-headlines?q=corona+virus&sources=google-news,bbc-news,business-insider&apiKey=fe65fa7f714044a190b92aa5808223ef';
    return dispatch=>{
    axios.get(url)
    .then(response=>{
        dispatch(renderNews(response.data.articles));
    })
    .then(error=>{
        console.log("sorry")
    })
    }
} 