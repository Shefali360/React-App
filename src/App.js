import React from 'react';
import Layout from './hoc/Layout/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './App.module.css';

const app=()=> {
  return (
    <div className={[styles.App,styles.Contain].join(' ')}>
      <Layout/>
    </div>
  );
}

export default app;
