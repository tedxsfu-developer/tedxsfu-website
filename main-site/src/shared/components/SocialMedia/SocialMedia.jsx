import React from "react";
import "./SocialMedia.css";

import SocialMedia from "../../content/socialMedia";
import LinkedImageIcon from "../LinkedImageIcon/LinkedImageIcon";

const SocialMediaLink = () => {
    return (
        <div className="social-group flex">
            {SocialMedia.map(item =>
                <LinkedImageIcon
                    href={item.url}
                    src={item.logo}
                    alt={item.name}
                />
            )}
        </div>
    );
}

export default SocialMediaLink;