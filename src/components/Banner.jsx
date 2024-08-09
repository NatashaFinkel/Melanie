import React from "react";
import { useLocation } from "react-router-dom";

function Banner() {
    const location = useLocation();
    const pageUrl = location.pathname;
    console.log(pageUrl);
    let bannerImgSrc;

    switch (pageUrl) {
        case "/":
            bannerImgSrc = "/images/banner-sun-and-stars.jpg";
            break;
        case "/prestations":
            bannerImgSrc = "/images/banner-colza-field.jpg";
            break;
        case "/anniversaire":
            bannerImgSrc = "/images/star-banner.jpg";
            break;
        case "/disclaimer":
            bannerImgSrc = "/images/fleurs-blanches.jpeg";
            break;
        case "/contact":
            bannerImgSrc = "/images/moon-boat.jpg";
            break;
        default:
            bannerImgSrc = "/images/motivation.jpeg";
            break;
    }

    console.log(bannerImgSrc);

    return (
        <div>
            <img src={bannerImgSrc} alt="bannière décorative" className="banner-img"></img>
        </div>
    )
}

export default Banner;