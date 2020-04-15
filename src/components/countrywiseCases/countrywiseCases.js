import React from "react";
import styles from './countrywiseCases.module.css';
import upArrow from '../../images/up.png';
import downArrow from '../../images/down.png';
import Search from '../../components/countrywiseCases/country/Search/Search';

const CountrywiseCases = (props) => {
  return (
    <div className={styles.Country}>

          <div className={styles.Div}>
            <div>
           <img className={styles.Img}src={props.flag} alt="country-flag"/>
           <span className={styles.CountryName}> {props.country}
            </span>
            </div>
            <div>
            {(props.arrow)>0?<img src={upArrow} alt="logo"/>:<img src={downArrow} alt="logo"/>}
           </div>
            </div>
            <span className={styles.TextBottom}>{props.affected}</span>
            <span className={styles.TextBottomRight}>{props.recovered}</span>
    </div>

      )
}
export default CountrywiseCases;
