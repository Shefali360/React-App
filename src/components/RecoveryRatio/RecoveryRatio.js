import React from 'react';
import styles from './RecoveryRatio.module.css';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import { Button } from 'react-bootstrap';
import Aux from'../../hoc/Aux/Aux';

const RecoveryRatio=()=>{
    let percentage=31.1;
return(
    <Aux>
    <p className={styles.RecoveryRatio}>Ratio of Recovery
    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
        strokeWidth:'80',
        textSize:'15px',
        pathColor: `#06ba90`,
        textColor: 'black',
        trailColor: '#d6d6d6',
        backgroundColor: 'pink',
    })}
        /></p>
        </Aux>
        )
}

export default RecoveryRatio;