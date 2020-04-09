import React from 'react';
import Cases from './CasesDiv/CasesDiv';
import styles from './Collection.module.css';
import RecoveryRatio from '../RecoveryRatio/RecoveryRatio';
const Collection=(props)=>{
return(
<div className={styles.Collection}>
<Cases>{props.children}</Cases>
<Cases>{props.children}</Cases>
<Cases>{props.children}</Cases>
<Cases>{props.children}</Cases>
<RecoveryRatio>{props.children}</RecoveryRatio>
</div>
)
}

export default Collection;