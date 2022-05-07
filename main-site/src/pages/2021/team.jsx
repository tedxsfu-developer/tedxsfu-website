import React, {useState, useRef, useEffect} from "react";

import TeamScroll from "../../2021/components/TeamScroll";
import TeamNav from "../../2021/components/TeamNav";
import PageLayout from "../../2021/components/PageLayout";

const TeamPage = () => {
    const [scrollWidth, setScrollWidth] = useState();
    // team focus
    const [spyTeam, setTeam] = useState(1);
    // page scroll location
    const [scroll, setScroll] = useState(0);

    const scrollRef = useRef();

    useEffect(() => {
        // set width of page
        setScrollWidth(
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
    }, []);

    return (
        <PageLayout>
            <div className="bg-black fixed left-0 right-0 top-0 bottom-0 flex flex-col">
                <TeamNav
                    spyTeam={spyTeam}
                    setTeam={setTeam}
                    scroll={scroll}
                    setScroll={setScroll}
                    scrollRef={scrollRef}
                    scrollWidth={scrollWidth}
                />
                <TeamScroll
                    spyTeam={spyTeam}
                    setTeam={setTeam}
                    scroll={scroll}
                    scrollRef={scrollRef}
                    setScroll={setScroll}
                />
            </div>
        </PageLayout>
    );
};

export default TeamPage;