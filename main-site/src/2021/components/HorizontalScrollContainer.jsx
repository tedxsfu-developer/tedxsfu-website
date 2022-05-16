import React, {useEffect, useRef} from "react";
import {mergeRefs} from "../../shared/utils/util";

const HorizontalScrollContainer = React.forwardRef(
    ({children, className}, ref) => {
        // mouse scroll delta value
        const scrollRef = useRef();

        const handleScroll = (e) => {
            scrollRef.current.scrollLeft += e.deltaY;
        };
        // set up global scroll listener
        useEffect(() => {
            window.addEventListener("wheel", handleScroll);
            return () => {
                window.removeEventListener("wheel", handleScroll);
            };
        }, []);

        return (
            <div
                ref={mergeRefs(scrollRef, ref)}
                className={`outer-scroll-container h-full ${className}`}
            >
                <div className="inner-scroll-container h-full">{children}</div>
            </div>
        );
    }
);

export default HorizontalScrollContainer;
