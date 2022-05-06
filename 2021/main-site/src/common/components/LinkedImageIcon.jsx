import React from "react";
import linkedIn from "../../static/images/icons/linkedIn.svg";

const LinkedImageIcon = ({ href, src, alt }) => {
    return(
        <a href={href} target="_blank">
            <img src={src} alt={alt} />
        </a>
    );
}

export default LinkedImageIcon;