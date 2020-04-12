import React from 'react';
import TwitterImg from '../../images/twitter.png';
import styles from './Tweets.module.css';

const Tweets=(props)=>{
    return(
        <div className={styles.Twitter}><p className={styles.Tweets}>Latest Tweets<img className={styles.TwitterIcon}src={TwitterImg} alt="twitter-icon"/></p></div>
    );
}

export default Tweets;