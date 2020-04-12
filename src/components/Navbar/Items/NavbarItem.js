import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavbarItem.module.css';

const NavbarItem=(props)=>{
    return(<div className={styles.NavDiv}><li className={styles.NavbarList}>
        <NavLink className={styles.NavbarEle} to={props.link} 
         activeClassName={styles.active}>{props.children}
        </NavLink></li></div>);
}

export default NavbarItem;
