import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './SpreadGraph.module.css';


const SpreadGraph=(props)=>{
    return(
        <li>
        <NavLink activeClassName={styles.active} className={styles.ToggleButtons}to={props.link}>{props.children}
        </NavLink>
        </li>
    );

}

export default SpreadGraph;