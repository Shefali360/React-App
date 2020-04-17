import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class MapGeo extends Component{
    intervalId;
  componentDidMount() {
    this.props.onFetchMapData();
    this.intervalId=setInterval(()=>this.props.onFetchMapData,300000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
render(){
    
    let finalarray=[];
    let optionArray={
        colorAxis:{colors:['#ffC4C6','#ff797D','#ff6f7d','#ff0019']},
        backgroundColor:'#fbf6f6'
       //   defaultColor:'#ff0019'
     }
    if(this.props.map.length!==0){
        let mapgeo=this.props.map;
        mapgeo.forEach((mapped)=>{
            let num=mapped.total_cases.split(',').join('');
            let finalvar=parseInt(num);
            let newarray=[];
            if(mapped.country==='USA'){
                mapped.country="United States";
            }
            newarray.push(mapped.country,finalvar);
            finalarray.push(newarray);   
        })
        finalarray.shift();
        finalarray.unshift(["Country","Cases"]);
    }
return(
    <Chart
  chartType="GeoChart"
  data={finalarray}
  options={optionArray}
  mapsApiKey='AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  rootProps={{ 'data-testid': '1' }}
/>
)}
}

const mapStateToProps=state=>{
    return{
        map:state.map.map
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchMapData:()=>dispatch(actions.fetchMapData())

    };
}

export default connect(mapStateToProps,mapDispatchToProps) (MapGeo);