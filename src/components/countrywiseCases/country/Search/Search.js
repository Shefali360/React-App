import React, { Component } from "react";
import styles from "./Search.module.css";
import Aux from "../../../../hoc/Aux/Aux";
import Axios from "axios";
import {connect} from 'react-redux';

class Search extends Component {
  state = {
    value: "",
  };
  inputChangedHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);
  };

//   handleInput=()=>{
//       axios.get("")
//   }

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
            handleInput={()=>this.handleInput(this.props.countries.country)}
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

export default connect(mapStateToProps)(Search);
