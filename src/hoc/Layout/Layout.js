import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Aux from '../Aux/Aux';
import Collection from "../../components/Collection/Collection";

const Layout=()=> {
    return (
      <Aux>
        <Toolbar />
        <Collection/>
      </Aux>
    );
}

export default Layout;
