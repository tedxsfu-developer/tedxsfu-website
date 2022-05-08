import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = (props) => {
    return(
        <Helmet htmlAttributes={{
            lang: 'en',
        }}>
            <title>{props.title}</title>
            <link rel="canonical" href={props.canonical} />
        </Helmet>
    );
}

export default PageHelmet;