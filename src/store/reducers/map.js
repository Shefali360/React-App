import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    map:[]
}


const renderMap=(state,action)=>{
    let arr=[];
    arr=action.mapdata;
   return updateObject(state,{
       map:arr
   }) 

}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_MAP:return renderMap(state,action);
        default:return state;
    }
}
export default reducer;