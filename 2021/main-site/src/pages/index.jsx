import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

import SocialMedia from "../common/components/socialMedia/SocialMedia";
import MainLogo from "../common/components/MainLogo";

const IndexPage = () => {
    return(
        <React.Fragment>
            <MainLogo />

            <h1>TEDxSFU 2022 is coming soon</h1>
            <h2>Stay tuned and check out <Link to={`/2021`}>TEDxSFU 2021</Link></h2>

            <p>Stay updated:</p>
            <SocialMedia />
        </React.Fragment>
    )
}

export default IndexPage;