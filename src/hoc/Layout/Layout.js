import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Aux from '../Aux/Aux';
import MainContainer from "../../components/MainContainer/MainContainer";

const Layout=()=> {
    return (
      <Aux>
        <Toolbar />
        <MainContainer/>
      </Aux>
    );
}

export default Layout;
