import React from "react";
import Team from "../components/Team/Team";
import GetEmail from "../components/GetEmail/GetEmail";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Marketing from "../components/Marketing/Marketing";
import Solutions from "../components/Solutions/Solutions";
import DynamicBanner from "../components/DynamicBanner/DynamicBanner";
import AboutComponent from "../components/AboutComponent/AboutComponent";

function AboutPage() {
    return (
        <>
            <DynamicBanner />
            <AboutComponent />
            <Marketing />
            <Solutions />
            <Team />
            <ChooseUs />
            <GetEmail />
        </>
    )
}

export default AboutPage
