import React from "react";
import linkedIn from "../../../static/images/icons/linkedIn.svg";

const LinkedImageIcon = ({ href, src, alt }) => {
    return(
        <a href={href} target="_blank" className="flex-item image-link">
            <img src={src} alt={alt} className="image-icon"/>
        </a>
    );
}

export default LinkedImageIcon;