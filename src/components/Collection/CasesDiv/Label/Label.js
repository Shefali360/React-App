import React from 'react';

const Graphs=(props)=>{
let label=null;
switch(props.label){
    case "totalCases":label=(<p className={props.class}>Total Cases</p>);
    break;
    case "recovered":label=(<p className={props.class}>Recovered</p>);
    break;
    case "activeCases":label=(<p className={props.class}>Active Cases</p>);
    break;
    case "totalDeaths":label=(<p className={props.class}>Total Deaths</p>);
    break;
    default:label=null;
}
return label;
}

export default Graphs;