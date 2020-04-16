import React from 'react';
import styles from './NewsDaily.module.css';


const NewsDaily=(props)=>{
    return(
        <div className={styles.OuterDiv}>
            <p >{props.title}</p>
            <p>{props.description}......</p>
            <p>To read more visit <a href={props.link}>{props.link}</a></p>
            <span>{props.author}{props.heading}{props.time}</span>
            <img src={props.image} alt="news"/>
        </div>
    );
}

export default NewsDaily;