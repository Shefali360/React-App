import React,{Component} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/custom/world-palestine-highres.geo.json";
import * as actions from "../../store/actions/index";
import {connect} from 'react-redux';
class WorldMap extends Component{
    componentDidMount(){
        this.onFetchMapData();
    }
    
   render(){
    highchartsMap(Highcharts); 
    let mapOpti
    return ( mapOptions = {
        chart: {
          backgroundColor:'#fbf6f6',
          borderRadius:"7",
          map: "custom/world-palestine-highres"
        },
        title: {
          text: " "
        },
        credits: {
          enabled: false
        },
        mapNavigation: {
          enabled: true,
          buttonOptions:{
            align:"right"
          }
        },
        series: [
          {
            // Use the gb-all map with no data as a basemap
            name: "Countries",
            mapData: mapDataIE,
            borderColor: "#A0A0A0",
            nullColor: "rgba(200, 200, 200, 0.3)",
            showInLegend: false
          },
          {
            // Specify points using lat/lon
            type: "",
            name: "",
            color: "",
            data: this.props.map,
            cursor: "pointer",
            point: {
              events: {
                click:()=> {
                  this.data=this.data.map((el)=>{
                    if(el['hc-key']=="confirmed"){
                      el.color="red";
                      return el;
                    }
                    return el;
                  });
                  this.update({
                    data:this.data
                  })
                }
              }
            }
          }
        ]
      };)
      
    }
    

  const mapStateToProps=state=>{
      return{
          map:state.map.map
      };
  };

  const mapDispatchToProps=dispatch=>{
    return {
    onFetchMapData: () => dispatch(actions.fetchMapData())
  };

  export default connect(mapStateToProps,napDispatchToProps)(WorldMap);
