import React from "react";
import { useLocation } from "react-router-dom";

function Banner() {
    const location = useLocation();
    const pageUrl = location.pathname;
    let bannerImgSrc;
    let bannerClassName;

    switch (pageUrl) {
        case "/":
            bannerImgSrc = "/images/banner-sun-and-stars.jpg";
            bannerClassName = "banner-img";
            break;
        case "/prestations":
            bannerImgSrc = "/images/banner-colza-field.jpg";
            bannerClassName = "banner-img colza-field";
            break;
        case "/anniversaire":
            bannerImgSrc = "/images/star-banner.jpg";
            bannerClassName = "banner-img";
            break;
        case "/disclaimer":
            bannerImgSrc = "/images/fleurs-blanches.jpeg";
            bannerClassName = "banner-img white-flowers";
            break;
        case "/contact":
            bannerImgSrc = "/images/moon-boat.jpg";
            bannerClassName = "banner-img moon-boat";
            break;
        default:
            bannerImgSrc = "/images/motivation.jpeg";
            bannerClassName = "banner-img motivation";
            break;
    }

    return (
        <div>
            <img src={bannerImgSrc} alt="bannière décorative" className={bannerClassName}></img>
        </div>
    )
}

export default Banner;