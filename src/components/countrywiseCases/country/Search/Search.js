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
   
  render() {
    let searchedData=this.props.error?<p>Error occurred</p>:<Spinner/>;
    if(!this.props.countries){
     searchedData=<p> Country does not exist or check spelling.</p>
    }
    if(this.props.countries){
     let countryData=this.props.countries;
      let searchdata=[];
      searchdata=Object.values(countryData);
      // console.log(searchdata[2]);
      // let num=searchdata.split(',').join('');
      //       let affect=search.split(',').join('');
      //       if(affect>999){
      //         affect=((affect/1000).toFixed(1))+'k';
      //       }
      // let recover=countries.total_recovered.split(',').join('');
      //       if(recover>999){
      //         recover=((recover/1000).toFixed(1))+'k';
      //       }
      console.log(searchdata);
      searchedData=(<div ><CountrywiseCases flag={searchdata[10]} country={searchdata[0]}
        affected={searchdata[2]} recovered={searchdata[6]} /></div>)
     }
    //  if(this.keyPress){
    //   return {searchdata}
    // }
    // else
    // return<Country/>
     
    if(this.inputChangedHandler){
    return (
      <Aux>
        <SearchData value={this.state.value} changed={this.inputChangedHandler} keypressed={this.keyPress}/>
        <div className={styles.Div}>
          {searchedData}
        </div>
      </Aux>
    )
  }
  else{
    return ( 
    <Aux>
      <SearchData value={this.state.value} changed={this.inputChangedHandler} keypressed={this.keyPress}/>
      <div className={styles.Div}>
        <Country/>
      </div>
    </Aux>);
  }
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
