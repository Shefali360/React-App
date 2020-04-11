import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={coronaStats:{
   totalCases:0,
    recovered:0,
    activeCases:0,
    totalDeaths:0
}
}


const renderCases=(state,action)=>{
    let casedata=action.casedata;
return(updateObject(state,{
       coronaStats:{totalCases:casedata.cases,
       recovered:casedata.recovered,
       activeCases:casedata.active,
       totalDeaths:casedata.deaths}
    }
))
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_CASES:return renderCases(state,action);
        default:return state;
    }
}
export default reducer;