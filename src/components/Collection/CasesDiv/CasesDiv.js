import React from 'react';
import styles from './CasesDiv.module.css';


const CasesDiv=(props)=>{
   return(  
   <div className={styles.CollectionItem}>
      {props.casedata}
   </div>);
}

export default CasesDiv;

