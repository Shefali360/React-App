import React from 'react';
import styles from './Map.module.css';
import zoomFeature from '../../images/map.png';
import MapGeo from '../../components/Map/MapGeo';
const Map=(props)=>{
    return(
        <div className={styles.Map}>
        <div className={styles.MapHeading}>
            <p>COVID-19 Affected Areas</p>
            <span className={styles.FirstIndicator}>Most Affected</span>
            <span className={styles.SecondIndicator}>Less Affected</span>
         </div>
         <div className={styles.MapArea}>
            <MapGeo/>
             <button type="search"><i className="fa fa-search"></i></button>
             <img className={styles.ZoomFeature}src={zoomFeature} alt="Map zoom feature"/>
         </div>
         </div>
            );
}

export default Map;