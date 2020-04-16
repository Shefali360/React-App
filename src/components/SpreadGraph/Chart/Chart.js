import React from 'react';
import {Chart} from 'react-google-charts';

const Graph=(props)=> {	
            return( <Chart
                chartType="Line"
                width='95%'
                height='95%'
                loader={<div>Loading Chart</div>}
                data={props.dataarray}
                options={{
                 selectionMode: 'multiple',
                axes:{y:{0:{side:'right'}}},
                 legend:{position:'none'},
                 series:{
                   0:{color:'#ff3b40',
                    lineDashStyle: [ 2, 2] },
                 
                 }
                }}
                // rootProps={{ 'data-testid': '1' }}
              />);
          
        }

  export default Graph;
