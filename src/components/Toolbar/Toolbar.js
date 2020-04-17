import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/NavbarItems';

const Toolbar=(props)=>{
return(

<div className={styles.Toolbar}>
<div className={styles.Logo}>
<Logo/>
<span className={styles.Sitetag}>COVID'19</span>
</div>
<Navbar/>

</div>
)
}

export default Toolbar;