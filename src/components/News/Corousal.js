import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Corousal.module.css';
import Aux from '../../hoc/Aux/Aux';

const News = (props) => {
    return (
        <Aux>
            <div className={styles.News}>
                <div>
                    <img className={props.imageStyle} src={props.image} alt={props.alt} />
                </div>
                <div>
                    <span className={styles.Heading}>{props.heading}</span>
                    <p className={styles.NewsHeading}>{props.news}</p>
                    <Link className={styles.Btn} to={props.route}>{ props.buttonText}</Link>
                </div>
            </div>
        </Aux>
    );
}

export default News;