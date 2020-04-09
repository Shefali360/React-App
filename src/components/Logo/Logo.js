import React from 'react';
import coronaLogo from '../../images/corona.png';
import styles from './Logo.module.css';
import Aux from '../../hoc/Aux/Aux';

const logo=()=>{
    return(
    <Aux>
        <img className={styles.Logo} src={coronaLogo} alt="covid-19"/>
    </Aux>);

}

export default logo;