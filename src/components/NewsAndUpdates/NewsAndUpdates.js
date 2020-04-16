import React, { Component } from 'react';
import Corousal from '../News/Corousal';
import symptomsImg from '../../images/symptoms.png';
import precautionsImg from '../../images/precautions.jpeg';
import mythImg from '../../images/myth.jpeg';
import styles from './NewsAndUpdates.module.css';
import {Link} from 'react-router-dom';


const array = [<Corousal imageStyle={styles.Image1} image={symptomsImg} alt="symptoms illustration"
        heading="News and Updates"
        news="Click to get latest news..."
        route="/news"
        buttonText="Read More"
    />,
    <Corousal imageStyle={styles.Image2} image={precautionsImg} alt="precautions illustration"
        heading="News and Updates"
        news="Click to get latest news..."
        route="/news"
        buttonText="Read More"
    />,
    <Corousal imageStyle={styles.Image3} image={mythImg} alt="myth illustration"
        heading="News and Updates"
        news="Click to get latest news..."
        route="/news"
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
        clearInterval(this.intervalId);
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