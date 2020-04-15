import React, { Component } from "react";
import styles from "./Search.module.css";
import Aux from "../../../../hoc/Aux/Aux";
import {connect} from 'react-redux';
import * as actions from "../../../../store/actions/index";

class Search extends Component {
  state = {
    value: "",
  };

  inputChangedHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.props.onSearchCountries(event.target.value);
    console.log(this.state.value);
  };


  render() {
    return (
      <Aux>
        <span className={styles.Search}>
          <i className="fa fa-search"></i>
          <input
            className={styles.Input}
            type="search"
            name="name"
            value={this.state.value}
            onChange={this.inputChangedHandler}
            placeholder="Search Location"
          />
        </span>
      </Aux>
    );
  }
}


const mapStateToProps=(state)=>{
    return{
        countries:state.countries.countries
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onSearchCountries:(value)=>dispatch(actions.fetchCountriesOnSearch(value))
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
