import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavbarItem.module.css';
import Aux from '../../../hoc/Aux/Aux';

const NavbarItem=(props)=>{
    return(<Aux><li className={styles.NavbarList}>
        <NavLink className={styles.NavbarEle} to={props.link} exact={props.exact}
         activeClassName={styles.active}>{props.children}
        </NavLink></li></Aux>);
}

export default NavbarItem;
