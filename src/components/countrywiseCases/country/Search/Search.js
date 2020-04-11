import React from 'react';
import styles from './Search.module.css';

const Search=(props)=>{
return(
<span className={styles.Search}><i className="fa fa-search"></i><input
className={styles.Input}
type="search"
name="name"
value={props.value}
onChange={props.changed}
placeholder="Search Location"
/></span>)}

export default Search;