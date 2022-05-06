import React from "react";
import "./SocialMedia.css";

import SocialMedia from "../../content/socialMedia";
import LinkedImageIcon from "../LinkedImageIcon";

const SocialMediaLink = () => {
    return(
        <React.Fragment>
            {SocialMedia.map(item =>
                <LinkedImageIcon
                    href={item.url}
                    src={item.logo}
                    alt={item.name}
                />
            )}
        </React.Fragment>
    );
}

export default SocialMediaLink;