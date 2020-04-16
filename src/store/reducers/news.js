import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    news:[]
}

const renderNews=(state,action)=>{
    let arr=[];
    arr=action.newsdata;
   return updateObject(state,{
       news:arr
   }) 

}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_NEWS:return renderNews(state,action);
        default:return state;
    }
}
export default reducer;