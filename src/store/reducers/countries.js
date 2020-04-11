import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    countries:[]
}


const renderCountries=(state,action)=>{
    let arr=[];
    arr=state.countries.concat(action.countrydata);
   return updateObject(state,{
       countries:arr
   }) 

}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_COUNTRIES:return renderCountries(state,action);
        default:return state;
    }
}
export default reducer;