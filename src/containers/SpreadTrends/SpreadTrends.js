import React,{Component} from 'react';
import {connect} from 'react-redux';
import SpreadGraph from '../../components/SpreadGraph/SpreadGraph';
import styles from './SpreadTrends.module.css';

class SpreadTrends extends Component{
    render(){
        return(
        <div className={styles.TopHeading}>
        <div>Spread Trends</div>
        <div>
           <ul>
               <SpreadGraph link="/home/confirmed">Confirmed</SpreadGraph>
               <SpreadGraph link="/home/recovered">Recovered</SpreadGraph>
               <SpreadGraph link="/home/deceased">Deceased</SpreadGraph>
           </ul>

        </div>
        </div>);
    }
}

export default SpreadTrends;