import React from "react";
import styles from './countrywiseCases.module.css';
import upArrow from '../../images/up.png';

const CountrywiseCases = (props) => {
  
  return (
    <div className={props.class}>
          <div className={styles.Div}>
            <div>
          <div>
           <img className={styles.Img}src={props.flag} alt="country-flag"/>
           <span className={styles.CountryName}> {props.country}
            </span>
            </div>
            <div>
            <span className={styles.TextBottom}>{props.affected}</span>
            <span className={styles.TextBottomRight}>{props.recovered}</span>
            </div>
            </div>
            <div><img src={upArrow} alt="logo"/></div>
            </div>
    </div>

      )
}
export default CountrywiseCases;
 // <Container className={styles.CountrywiseCases}>
          {/* <span className={styles.Search}><i className="fa fa-search"></i><input
            className={styles.Input}
            type="search"
            name="name"
            placeholder="Search Location"
          /></span> */}