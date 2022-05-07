import React from "react";
import { Link } from "gatsby";

import SocialMedia from "../common/components/SocialMedia/SocialMedia";
import MainLogo from "../common/components/MainLogo";

const IndexPage = () => {
    return(
        <div className="full-view">
            <div className="page-centered">
                <h1 className="main-heading font-bold main-font">TEDxSFU 2022 Conference is coming soon!</h1>
                <h2 className="secondary-heading font-light main-font">Stay tuned and check out <Link to={`/2021`} className="simple-link">TEDxSFU 2021 Conference</Link></h2>
            </div>
            <footer>
                <section className="social-media">
                    <p className="main-font">Connect with us</p>
                    <SocialMedia />
                </section>
                <MainLogo />
            </footer>
        </div>
    )
}

export default IndexPage;