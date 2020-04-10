import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Aux from '../Aux/Aux';
import MainConatiner from "../../components/MainContainer/MainContainer";

const Layout=()=> {
    return (
      <Aux>
        <Toolbar />
        <MainConatiner/>
      </Aux>
    );
}

export default Layout;
