import React from "react";
import HeaderPageOption from "./HeaderPageOption";

function Header() {
    return (
        <div>
            <h1>Les GuidanSes de Mélanie</h1>
            <div className="nav-bar">

                <HeaderPageOption pageUrl="/" pageTitle="Accueil" />

                <HeaderPageOption pageUrl="/prestations" pageTitle="Prestations" />

                <HeaderPageOption pageUrl="/anniversaire" pageTitle="Le signe du mois" />

                <HeaderPageOption pageUrl="/disclaimer" pageTitle="Disclaimer" />

                <HeaderPageOption pageUrl="/blog" pageTitle="Blog" />
                
                <HeaderPageOption pageUrl="/contact" pageTitle="Contact et réservation" />
            </div>
        </div>
    )
}

export default Header;