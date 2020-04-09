import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavbarItem.module.css';

const navbarItem=(props)=>{
    return(<div className={styles.NavDiv}><li className={styles.NavbarList}><NavLink className={styles.NavbarEle} to={props.link} exact={props.exact} activeClass={styles.active}>{props.children}</NavLink></li></div>);
}

export default navbarItem;
