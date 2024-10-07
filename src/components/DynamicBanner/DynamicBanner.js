import React from 'react'
import "./DynamicBanner.scss"
import { useLocation } from 'react-router-dom'
import { b2, b3, b4 } from '../../assets/img/img'



const listContent = [
    {
        title: "About Us",
        content: "Experience you can trust, service you can count on.",
        img: b2,
        styleBgSize: "cover",
    },
    {
        title: "Services",
        content: "We work with bold brands that we believe in.",
        img: b3,
        styleBgSize: "cover",
    },
    {
        title: "Contact Us",
        content: "We are an agency located in New York.",
        img: b4,
        styleBgSize: "cover",
    },
    {
        title: "Error Page",
        content: "Page cannot be found.",
        img: 'https://wp.w3layouts.com/corpvision/wp-content/themes/corpvision/assets/images/error.svg',
        styleBgSize: "contain",
    },

]

const DynamicBanner = () => {
    const location = useLocation();

    const renderContent = (listContent) => {
        let { title, content, img, styleBgSize } = listContent
        return <div className='dynamic-banner' style={{ backgroundImage: `url(${img})`, backgroundSize: `${styleBgSize}` }}>
            <div className="container">
                <div className='dynamic-banner-content'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className="over-play">
                    </div>
                </div>
            </div>
        </div>
    }

    let content;
    switch (location.pathname) {
        case "/about":
            content = renderContent(listContent[0]);
            break;
        case "/services":
            content = renderContent(listContent[1]);
            break;
        case "/contact":
            content = renderContent(listContent[2]);
            break;
        default:
            content = renderContent(listContent[3]);
            break;
    }

    return (
        <>

            {content}


        </>
    )
}

export default DynamicBanner;