import React from "react";
import styles from './countrywiseCases.module.css';
import upArrow from '../../images/up.png';

const CountrywiseCases = (props) => {
  
  return (
    <div className={props.class}>
          <div className={styles.Div}>
            <div>
           <img className={styles.Img}src={props.flag} alt="country-flag"/>
           <span className={styles.CountryName}> {props.country}
            </span>
            </div>
            <div><img src={upArrow} alt="logo"/></div>
            </div>
            <span className={styles.TextBottom}>{props.affected}</span>
            <span className={styles.TextBottomRight}>{props.recovered}</span>
    </div>

      )
}
export default CountrywiseCases;
