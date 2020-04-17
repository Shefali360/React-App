import React from 'react';
import Logo from '../../components/Logo/Logo';
import NavbarItems from '../../components/Navbar/NavbarItems';
import styles from './SideDrawer.module.css'

const SideDrawer=(props)=>{
    return(
        <div className={styles.SideDrawer}>
            <span className={styles.Sitetag}>COVID'19</span>
            <nav className={styles.Navbar}>
                <NavbarItems/>
            </nav>
        </div>
    );
}

export default SideDrawer;