import React from 'react';
import NavbarItem from '../Navbar/Items/NavbarItem';
import styles from './NavbarItems.module.css';

const Navbar=(props)=>{
    return (
        <ul className={styles.Navbar}>
            <NavbarItem link="/" exact>HOME</NavbarItem>
            <NavbarItem link="/faq">FAQ</NavbarItem>
            <NavbarItem link="help">HELPFUL LINKS</NavbarItem>
        </ul>
    );

}

export default Navbar;