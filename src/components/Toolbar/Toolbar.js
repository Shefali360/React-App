import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/NavbarItems';

const toolbar=(props)=>{
return(
<header className={styles.Toolbar}>
<Logo/>
<span className={styles.Sitetag}>COVID'19</span>
<Navbar/>
</header>
)
}

export default toolbar;