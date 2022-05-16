import React from "react";
import {Link} from "gatsby";

import SocialMedia from "../shared/components/SocialMedia/SocialMedia";
import MainLogo from "../shared/components/MainLogo";
import PageHelmet from "../shared/components/PageHelmet";
import GrowingTextAnimation from "../shared/components/animation/GrowingTextAnimation";
import {SimpleDivAnimation, SimpleSectionAnimation} from "../shared/components/animation/SimpleTransitionAnimation";

const IndexPage = () => {
    return (
        <React.Fragment>
            <PageHelmet
                title="TEDxSFU 2022 is coming soon"
                canonical="https://www.tedxsfu.com/"
                description="TEDxSFU is an independently organized event organized by students and alumni volunteers at Simon Fraser University. Our goal is to bring people together to share a TED-like experience while promoting ideas worth spreading."
            />

            <div className="full-view">
                <div className="page-centered">
                    <SimpleDivAnimation>
                        <h1 className="main-heading font-bold main-font">
                            TEDxSFU 2022: <span className="reflection-text">Reflection</span> is coming soon!
                        </h1>
                    </SimpleDivAnimation>
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
                                <SocialMedia/>
                            </SimpleSectionAnimation>
                        </section>
                    </SimpleDivAnimation>
                    <MainLogo/>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default IndexPage;