import React, { Component } from 'react';
import Corousal from '../News/Corousal';
import symptomsImg from '../../images/symptoms.png';
import precautionsImg from '../../images/precautions.jpeg';
import mythImg from '../../images/myth.jpeg';
import styles from './NewsAndUpdates.module.css';
import {Link} from 'react-router-dom';

const news = [
    "5 Symptoms of Corona Virus that you should know.",
    "Precautions to be taken to avoid corona virus.",
    "Common myths about corona virus and it's prevention."
]
const array = [<Corousal imageStyle={styles.Image1} image={symptomsImg} alt="symptoms illustration"
        heading="News and Updates"
        news={news[0]}
        route="/help"
        buttonText="Read More"
    />,
    <Corousal imageStyle={styles.Image2} image={precautionsImg} alt="precautions illustration"
        heading="News and Updates"
        news={news[1]}
        route="/help"
        buttonText="Read More"
    />,
    <Corousal imageStyle={styles.Image3} image={mythImg} alt="myth illustration"
        heading="News and Updates"
        news={news[2]}
        route="/help"
        buttonText="Read More"
    />
];

class NewsAndUpdates extends Component {
   state = {
           index: 0,
            handle: null
        }
   

    startRolling=()=> {
        const handle = setInterval(() => {
            let currentIndex = this.state.index + 1;
            this.setState({index: currentIndex % 3 });
        }, 2000);

        this.setState({
            handle: handle
        });
    }

    componentDidMount() {
        this.startRolling();
    }

    componentWillUnmount() {
        clearInterval(this.state.handle);
    }

    stopRolling=()=> {
        clearInterval(this.state.handle);
    }

    setCurrentIndex=(index)=>{
        this.setState({
           index:index
        })
    }

    render() {
        return (
            <div className={styles.carousel} onMouseEnter={this.stopRolling} onMouseLeave={this.startRolling}>
                <div className={styles.banner}>
                    { array[this.state.index] }
                </div>
                <span className={styles.DotContainer}>
                    <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index === 0 ? styles.DotActive : '')}></Link>
                    <Link to="/home"onClick={()=>this.setCurrentIndex(1)} className={styles.Dot + " " + (this.state.index === 1 ? styles.DotActive : '') }></Link>
                    <Link to="/home"onClick={()=>this.setCurrentIndex(2)} className={styles.Dot + " " + (this.state.index === 2 ? styles.DotActive : '')}></Link>
                </span>
            </div>
        );
    }
}

export default NewsAndUpdates;