import React, { Component } from "react";
import CountrywiseCases from "../../components/countrywiseCases/countrywiseCases";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Aux from '../../hoc/Aux/Aux';
import styles from './country.module.css';

class Country extends Component {
  componentDidMount() {
    this.props.onFetchCountries();
  }

  render(){
     let countrydata=[];
     if (this.props.countries.length!==0) {
      let count = this.props.countries;
      console.log(count)
        countrydata = count.map((countries) => {
            return (
             
              <li key={countries.country} >
                <CountrywiseCases class={styles.Country} flag={countries.flag} country={countries.country}
                 affected={countries.total_cases} recovered={countries.total_recovered}/>
              </li>
            
            );
       });
  }
 return (
        <Aux>
      <ul className={styles.List}>
       {countrydata}
       </ul>
        </Aux>
    );
}
}
const mapStateToProps = (state) => {
  return {
    countries:state.countries.countries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCountries:()=>dispatch(actions.fetchCountries())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Country);

