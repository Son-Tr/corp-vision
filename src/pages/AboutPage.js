import React from "react";
import DynamicBanner from "../components/DynamicBanner/DynamicBanner";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import Marketing from "../components/Marketing/Marketing";
import Solutions from "../components/Solutions/Solutions";
import Team from "../components/Team/Team";
import Industries from "../components/Industries/Industries";
import GetEmail from "../components/GetEmail/GetEmail";

function AboutPage() {
    return (
        <>
            <DynamicBanner />
            <AboutComponent />
            <Marketing />
            <Solutions />
            <Team />
            <Industries />
            <GetEmail/>
        </>
    )
}

export default AboutPage
