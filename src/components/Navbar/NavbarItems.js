import React from 'react';
import NavbarItem from '../Navbar/Items/NavbarItem';
import styles from './NavbarItems.module.css';

const Navbar=(props)=>{
    return (
        // <div className={styles.DesktopOnly}>
        <ul className={styles.Navbar}>
            <NavbarItem link="/home" exact>HOME</NavbarItem>
            <NavbarItem link="/faq">FAQ</NavbarItem>
            <NavbarItem link="/help">HELPFUL LINKS</NavbarItem>
        </ul>
        // </div>
    );

}

export default Navbar;