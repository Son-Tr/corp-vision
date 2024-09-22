import React from "react";
import Header from "../components/Header/Header";

function Layout({ Component }) {
    return (
        <>
            <Header/>
            <Component />
            Layout
        </>
    )
}

export default Layout
