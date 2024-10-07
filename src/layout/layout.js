import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

function Layout({ Component }) {
    return (
        <>
            <Header/>
            <Component  />
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default Layout
