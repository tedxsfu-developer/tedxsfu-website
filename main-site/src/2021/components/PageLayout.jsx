import React from "react";
import Navbar from "./nav/Navbar";

const PageLayout = ({children}) => {
    return (
        <React.Fragment>
            <Navbar page={1}/>
            {children}
        </React.Fragment>
    );
}

export default PageLayout;