import React, { Component } from "react";
import styles from "./Search.module.css";
import Aux from "../../../../hoc/Aux/Aux";
import {connect} from 'react-redux';
import * as actions from "../../../../store/actions/index";
import CountrywiseCases from "../../countrywiseCases";
import Spinner from '../../../../components/Spinner/Spinner';
import SearchData from '../SearchedData/SearchedData';
import Country from '../../../../containers/country/country';


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
  keyPress=(event)=>{
      if(event.keyCode===13){
        console.log(this.state.value);
        this.props.onSearchCountries(event.target.value,"Error occured");
       
      }
    };
  // deleteText=(event)=>{
  //   if(event.keyCode===8){
  //    return <Country/>;
  //   }
  // }
   
  render() {
    let searchedData=this.props.error?<p>Error occurred</p>:<Spinner/>;
    if(!this.props.countries && this.state.value){
      return (<Aux><SearchData value={this.state.value} changed={this.inputChangedHandler} keypressed={this.keyPress} />
        <p>Please enter a valid country name or check spelling. </p>
        <Country/></Aux>)
    }
    if(this.props.countries){
     let countryData=this.props.countries;
      let searchdata=[];

      searchdata=Object.values(countryData);
      console.log(searchdata);
      searchedData=(<div className={styles.Div}><CountrywiseCases flag={searchdata[10]} country={searchdata[0]}
        affected={searchdata[2]} recovered={searchdata[6]} /></div>)
     }
    return (
      <Aux>
       <SearchData value={this.state.value} changed={this.inputChangedHandler} keypressed={this.keyPress} />
        {(this.props.countries && this.state.value)?searchedData:''}
        <Country/>
        
       
      </Aux>
    )

//   else{
//     return ( 
//     <Aux>
//       <SearchData/>
        
//     </Aux>);
//   }
}
}

const mapStateToProps=(state)=>{
    console.log(state.search.countries);
    return{
        countries:state.search.countries,
        error:state.search.error
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onSearchCountries:(value,error)=>dispatch(actions.fetchCountriesOnSearch(value,error))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
