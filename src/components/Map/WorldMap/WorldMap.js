import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world-palestine-highres.geo.json";
highchartsMap(Highcharts); 
const mapOptions = {
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
        mapData: mapData,
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false
      },
      {
        // Specify points using lat/lon
        type: "",
        name: "",
        color: "",
        data: [{ keyword: "Galway", lat: 53.27, lon: -9.25 }],
        cursor: "pointer",
        point: {
          events: {
            click: function() {
              console.log(this.keyword);
            }
          }
        }
      }
    ]
  };
  
  const WorldMap= () => (
    <div>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
      />
    </div>
  );

  export default WorldMap;
