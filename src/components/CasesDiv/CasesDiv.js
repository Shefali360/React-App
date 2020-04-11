import React from 'react';
import styles from './CasesDiv.module.css';


const CasesDiv=(props)=>{
   return(  
   <div className={styles.CollectionItem}>
      <p className={props.class}>{props.casedata}</p>
   </div>);
}

export default CasesDiv;

