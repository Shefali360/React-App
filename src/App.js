import React from 'react';
import Homepage from './hoc/Homepage/Homepage';
import {Route,Switch} from 'react-router-dom';
import Faq from './components/FAQ/Faq';
import Toolbar from './components/Toolbar/Toolbar';
import Links from './components/Links/Links';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import News from './components/News/GetNews/GetNews';
import styles from './App.module.css';


const app=()=> {
  return (
    <div className={[styles.App,styles.Contain].join(' ')}>
        <Toolbar/>
        <Route path="/" exact component={Homepage}/>
       <Switch>
              <Route path="/home" component={Homepage}/>
              <Route path="/news" component={News}/>
              <Route path="/faq" component={Faq}/>
              <Route path="/help"  component={Links}/>
        </Switch>
     
    </div>
  );
}

export default app;
