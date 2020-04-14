import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={chart:{
  labels:[],
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