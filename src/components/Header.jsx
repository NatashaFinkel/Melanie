import { useLocation } from "react-router-dom";
import { memo } from "react";
import PageOption from "./PageOption";

// Précomputation des icônes pour éviter les créations répétées
const icons = {
  home: <i className="fa fa-home"></i>,
  star: <i className="fa-solid fa-star"></i>,
  book: <i className="fa-solid fa-book"></i>,
  cake: <i className="fa-solid fa-cake-candles"></i>,
  xmark: <i className="fa-regular fa-circle-xmark"></i>,
  envelope: <i className="fa-regular fa-envelope"></i>,
};

const Header = memo(() => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="header">
      <div className="header-title">
        <img
          src={`${baseUrl}assets/divider.webp`}
          alt="séparateur décoratif"
          className="divider"
        ></img>
        <h1>Les GuidanSes de Mélanie</h1>
        <img
          src={`${baseUrl}assets/divider.webp`}
          alt="séparateur décoratif"
          className="divider second-divider"
        ></img>
      </div>
      <div className="nav-bar">
        <PageOption
          pageUrl="/"
          pageTitle="Accueil"
          icon={icons.home}
          isActive={currentPath === "/"}
        />

        <PageOption
          pageUrl="/prestations"
          pageTitle="Prestations"
          icon={icons.star}
          isActive={currentPath === "/prestations"}
        />

        <PageOption
          pageUrl="/blog"
          pageTitle="Blog"
          icon={icons.book}
          isActive={currentPath === "/blog" || currentPath.startsWith("/blog/")}
        />

        <PageOption
          pageUrl="/anniversaire"
          pageTitle="Astro"
          icon={icons.cake}
          isActive={currentPath === "/anniversaire"}
        />

        <PageOption
          pageUrl="/disclaimer"
          pageTitle="Disclaimer"
          icon={icons.xmark}
          isActive={currentPath === "/disclaimer"}
        />

        <PageOption
          pageUrl="/contact"
          pageTitle="Contact et réservation"
          icon={icons.envelope}
          optionClassName="contact-link"
          isActive={currentPath === "/contact"}
        />
      </div>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
