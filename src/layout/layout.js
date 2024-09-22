import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout({ Component }) {
    return (
        <>
            <Header/>
            <Component />
            <Footer/>
        </>
    )
}

export default Layout
