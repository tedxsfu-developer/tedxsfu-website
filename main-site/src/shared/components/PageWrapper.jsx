import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import "../../2021/styles/global.css";

const PageWrapper = ({children}) => {
    return (
        <motion.div
            className="bg-black font-NeueHaas w-screen h-full flex"
            initial={{opacity: 0}}
            // delay to reduce computation load
            animate={{opacity: 1}}
        >
            <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </motion.div>
    );
};

export default PageWrapper;
