import {Link} from "gatsby";
import Image from "../../2021/components/Image";
import React from "react";

const MainLogo = () => {
    return(
        <Link to="/">
            <Image
                className="site-logo"
                src="/images/logo.png"
                alt="TEDxSFU logo"
            />
        </Link>
    );
}

export default MainLogo;