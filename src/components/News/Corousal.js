import React from 'react';
import symptomsImg from '../../images/symptoms.png';
import precautionsImg from '../../images/precautions.jpeg';
import mythImg from '../../images/myth.jpeg';
import {Link} from 'react-router-dom';
import styles from './Corousal.module.css';
import Aux from '../../hoc/Aux/Aux';

const News=(props)=>{
    return(
        <Aux>   
           <div  className={styles.News}>
            <div>
                <img className={styles.Image1} src={symptomsImg} alt="symptom illustration"/>
            </div>
            <div>
                <span className={styles.Heading}>News & Updates</span>
                <p className={styles.NewsHeading}>5 Symptoms of Corona Virus that you should know</p>
                <Link className={styles.Btn}to="/news">Know More</Link>
            </div>
        </div>
     
        <div  className={styles.News}>
            <div>
                <img className={styles.Image2} src={precautionsImg} alt="precautions illustration"/>
            </div>
            <div>
                <span className={styles.Heading}>News & Updates</span>
                <p className={styles.NewsHeading}>Precautions to be taken to avoid corona virus.</p>
                <Link className={styles.Btn}to="/news">Know More</Link>
            </div>
        </div>

     
        <div  className={styles.News}>
            <div>
                <img className={styles.Image3} src={mythImg} alt="myth illustration"/>
            </div>
            <div>
                <span className={styles.Heading}>News & Updates</span>
                <p className={styles.NewsHeading}>Common myths about corona virus and it's prevention.</p>
                <Link className={styles.Btn}to="/news">Know More</Link>
            </div>
        </div>
       
        <div className={styles.DotContainer}>
            <span className={styles.Dot}></span> 
            <span className={styles.Dot}></span> 
            <span className={styles.Dot}></span> 
        </div>
        </Aux>
    );
}

export default News;