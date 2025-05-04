import React from "react";
import PageOption from "./PageOption";

function Header() {
    return (
        <div className="header">
            <h1>Les GuidanSes de Mélanie</h1>
            <div className="nav-bar">
                <PageOption pageUrl="/" pageTitle="Accueil" />

                <PageOption pageUrl="/prestations" pageTitle="Prestations" />

                <PageOption
                    pageUrl="/anniversaire"
                    pageTitle="Le signe du mois"
                />

                <PageOption pageUrl="/disclaimer" pageTitle="Disclaimer" />

                <PageOption
                    pageUrl="/contact"
                    pageTitle="Contact et réservation"
                    optionClassName="contact-link"
                />
            </div>
        </div>
    );
}

export default Header;