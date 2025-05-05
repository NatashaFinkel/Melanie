import React from "react";
import PageOption from "./PageOption";

function Footer() {
    return (
        <footer id="footer">
            <PageOption pageUrl="/CGU" pageTitle="CGU" />
            <a
                href="https://www.youtube.com/@lesguidanSesdemelanie"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/assets/youtube-logo.svg" alt="Logo YouTube"></img>
            </a>
            <a
                href="https://www.facebook.com/GuidanSesMelanie"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/assets/facebook-logo.svg" alt="Logo Facebook"></img>
            </a>
        </footer>
    );
}

export default Footer;
