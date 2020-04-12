import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';

const SpreadGraph=(props)=>{
    return(
        <li>
        <NavLink to={props.link}>{props.children}
        </NavLink>
        </li>
    );

}

export default SpreadGraph;