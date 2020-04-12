import React from 'react';
import TwitterImg from '../../images/twitter.png';
import styles from './Tweets.module.css';

const Tweets=(props)=>{
    return(
        <p className={styles.Tweets}>Latest Tweets<img src={TwitterImg} alt="twitter-icon"/></p>
    );
}

export default Tweets;