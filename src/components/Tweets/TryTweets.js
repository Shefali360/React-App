import React, { Component } from "react";
import TwitterImg from "../../images/twitter.png";
import styles from "./TryTweets.module.css";

const Twitter = (props) => {
  return (
    <div className={styles.Twitter}>
      <p className={styles.Tweets}>
        Latest Tweets
        <img
          className={styles.TwitterIcon}
          src={TwitterImg}
          alt="twitter-icon"
        />
      </p>
      <div>
        <div>
          <img src={props.image} alt="profile-icon" />
          <div>
            <p>{props.user}</p>
            <p>@{props.account}</p>
          </div>
        </div>
        <p>{props.content}</p>
    <div><span>{props.likes}{props.retweet}{props.time}</span></div>
      </div>
    </div>
  );
};

export default Twitter;
