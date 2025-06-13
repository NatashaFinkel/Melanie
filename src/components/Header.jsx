import { useLocation } from "react-router-dom";
import PageOption from "./PageOption";

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <img
        src="/assets/divider.png"
        alt="séparateur décoratif"
        className="divider"
      ></img>
      <h1>Les GuidanSes de Mélanie</h1>
      <div className="nav-bar">
        <PageOption
          pageUrl="/"
          pageTitle="Accueil"
          icon={<i className="fa fa-home"></i>}
          isActive={location.pathname === "/"}
        />

        <PageOption
          pageUrl="/prestations"
          pageTitle="Prestations"
          icon={<i className="fa-solid fa-magnifying-glass"></i>}
          isActive={location.pathname === "/prestations"}
        />

        <PageOption
          pageUrl="/anniversaire"
          pageTitle="Astro"
          icon={<i className="fa-solid fa-cake-candles"></i>}
          isActive={location.pathname === "/anniversaire"}
        />

        <PageOption
          pageUrl="/disclaimer"
          pageTitle="Disclaimer"
          icon={<i className="fa-regular fa-circle-xmark"></i>}
          isActive={location.pathname === "/disclaimer"}
        />

        <PageOption
          pageUrl="/contact"
          pageTitle="Contact et réservation"
          icon={<i className="fa-regular fa-envelope"></i>}
          optionClassName="contact-link"
          isActive={location.pathname === "/contact"}
        />
      </div>
    </div>
  );
}

export default Header;
