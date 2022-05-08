import React from "react";
import { Link } from "gatsby";

import SocialMedia from "../common/components/SocialMedia/SocialMedia";
import MainLogo from "../common/components/MainLogo";
import PageHelmet from "../common/components/PageHelmet";
import GrowingTextAnimation from "../common/components/animation/GrowingTextAnimation";
import {SimpleDivAnimation, SimpleSectionAnimation} from "../common/components/animation/SimpleTransitionAnimation";

const IndexPage = () => {
    return(
        <React.Fragment>
            <PageHelmet
                title="TEDxSFU 2022 is coming soon"
                canonical="https://www.tedxsfu.com/"
            />

            <div className="full-view">
                <div className="page-centered">
                        <h1 className="main-heading font-bold main-font">
                            <GrowingTextAnimation fontWeight={700}>
                                TEDxSFU 2022 Conference is coming soon!
                            </GrowingTextAnimation>
                        </h1>
                        <h2 className="secondary-heading font-light main-font">
                            <GrowingTextAnimation fontWeight={300}>
                                Stay tuned and check out
                            </GrowingTextAnimation>
                            <Link to={`/2021`} className="simple-link">
                                <GrowingTextAnimation fontWeight={300}>
                                    TEDxSFU 2021 Conference
                                </GrowingTextAnimation>
                            </Link>
                        </h2>
                </div>
                <footer>
                    <SimpleDivAnimation>
                        <section className="social-media">
                            <SimpleSectionAnimation>
                                <p className="main-font">Connect with us</p>
                                <SocialMedia />
                            </SimpleSectionAnimation>
                        </section>
                    </SimpleDivAnimation>
                    <MainLogo />
                </footer>
            </div>
        </React.Fragment>
    )
}

export default IndexPage;