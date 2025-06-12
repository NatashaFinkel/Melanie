import { useLocation } from "react-router-dom";
import PageOption from "./PageOption";

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <h1>Les GuidanSes de Mélanie</h1>
      <div className="nav-bar">
        <PageOption
          pageUrl="/"
          pageTitle="Accueil"
          isActive={location.pathname === "/"}
        />

        <PageOption
          pageUrl="/prestations"
          pageTitle="Prestations"
          isActive={location.pathname === "/prestations"}
        />

        <PageOption
          pageUrl="/anniversaire"
          pageTitle="Astro"
          isActive={location.pathname === "/anniversaire"}
        />

        <PageOption
          pageUrl="/disclaimer"
          pageTitle="Disclaimer"
          isActive={location.pathname === "/disclaimer"}
        />

        <PageOption
          pageUrl="/contact"
          pageTitle="Contact et réservation"
          optionClassName="contact-link"
          isActive={location.pathname === "/contact"}
        />
      </div>
    </div>
  );
}

export default Header;
