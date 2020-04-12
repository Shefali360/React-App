import React from 'react';
import styles from './Map.module.css';
import zoomFeature from '../../images/map.png';
const Map=(props)=>{
    return(
        <div className={styles.Map}>
        <div className={styles.MapHeading}>
            <p>COVID-19 Affected Areas</p>
            <span className={styles.FirstIndicator}>Most Affected</span>
            <span className={styles.SecondIndicator}>Less Affected</span>
         </div>
         <div className={styles.MapArea}>
             <i className="fa fa-search"></i>
             <img className={styles.ZoomFeature}src={zoomFeature} alt="zoom feature"/>
         </div>
         </div>
            );
}

export default Map;