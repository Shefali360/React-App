import React, { Component } from 'react';
import TwitterImg from '../../images/twitter.png';
import styles from './Tweets.module.css';

class Tweets extends Component{
   
    render(){
        return(
        <div className={styles.Twitter}><p className={styles.Tweets}>Latest Tweets<img className={styles.TwitterIcon}src={TwitterImg} alt="twitter-icon"/></p>
         <a className="twitter-timeline" data-height="490" 
         href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a>
        </div>
    );
}
}

export default Tweets;
