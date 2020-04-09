import React from 'react';
import Layout from './hoc/Layout/Layout';
import styles from './App.module.css';

const app=()=> {
  return (
    <div className={styles.App}>
      <Layout/>
    </div>
  );
}

export default app;
