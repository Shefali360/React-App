import React from 'react';
import Corousal from '../News/Corousal';
import styles from './NewsAndUpdates.module.css';


const NewsAndUpdates=(props)=>{

    let array=[<Corousal class={styles.Image1} image={symptomsImg} alt="symptoms illustration">5 Symptoms of Corona Virus that you should know</Corousal>,
    <Corousal  class={styles.Image2} image={precautionsImg} alt="precautions illustration">Precautions to be taken to avoid corona virus.</Corousal>,
    <Corousal class={styles.Image3} image={mythImg} alt="myth illustration">Common myths about corona virus and it's prevention.</Corousal>];
    const display=()=>{
    let i;
    let slideIndex=0; 
    for (i = 0; i < array.length; i++) {
    array[i].style.display = "none";  
     }
    slideIndex++;
    if (slideIndex > array.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
    array[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
    setTimeout(display, 2000); 
}
    return(
        {display}
    );


}

export default NewsAndUpdates;