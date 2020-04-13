import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import styles from './Links.module.css';

const Links=()=>{
    return (
        <Aux>
            <iframe className={styles.Video}src="https://www.youtube.com/embed/pKu8Bzq64iY"></iframe>
            <p>5 Symptoms of Corona Virus that you should know</p>
            <iframe className={styles.Video}src="https://www.youtube.com/embed/QH1eXvmyYMk"></iframe>
            <iframe className={styles.Video}src="https://www.youtube.com/embed/9qXZhG7I4qo"></iframe>
            <iframe className={styles.Video}src="https://www.youtube.com/embed/-Mk2BZRJvrw"></iframe>
        </Aux>
    );
}

export default Links;