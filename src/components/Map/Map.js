import React from 'react';
import styles from './Map.module.css';
import zoomFeature from '../../images/map.png';
import WorldMap from './WorldMap/WorldMap';
const Map=(props)=>{
    return(
        <div className={styles.Map}>
        <div className={styles.MapHeading}>
            <p>COVID-19 Affected Areas</p>
            <span className={styles.FirstIndicator}>Most Affected</span>
            <span className={styles.SecondIndicator}>Less Affected</span>
         </div>
         <div className={styles.MapArea}>
            <WorldMap/>
             <button type="search"><i className="fa fa-search"></i></button>
         </div>
         </div>
            );
}

export default Map;