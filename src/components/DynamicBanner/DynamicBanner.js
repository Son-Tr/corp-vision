import React from 'react'
import "./DynamicBanner.scss"
import { useLocation } from 'react-router-dom'

const listContent = [
    {
        title: "About Us",
        content: "Experience you can trust, service you can count on."
    },
    {
        title: "Services",
        content: "We work with bold brands that we believe in."
    },
    {
        title: "Contact Us",
        content: "We are an agency located in New York."
    },
    {
        title: "Error Page",
        content: "Page cannot be found."
    },

]

const DynamicBanner = () => {
    const location = useLocation();

    const renderContent = (listContent) => {
        let { title, content } = listContent
        return <div className='dynamic-banner-content'><h2>{title}</h2><p>{content}</p><div className="over-play"></div></div>
    }

    let content;
    switch (location.pathname) {
        case "/about":
            content = renderContent(listContent[0]);
            break;
        case "/services":
            content = renderContent(listContent[1]);
            break;
        case "/Contact":
            content = renderContent(listContent[2]);
            break;
        default:
            content = renderContent(listContent[3]);
            break;
    }

    return (
        <div className='dynamic-banner'>
            <div className="container">
                {content}
            </div>
          
        </div>
    )
}

export default DynamicBanner;