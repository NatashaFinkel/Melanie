import { useLocation } from "react-router-dom";
import PageOption from "./PageOption";

function Footer() {
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer id="footer">
      <PageOption
        pageUrl="/CGU"
        pageTitle="CGU"
        optionClassName="footer-link"
        isActive={location.pathname === "/CGU"}
      />
      <a
        href="https://www.youtube.com/@lesguidanSesdemelanie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${baseUrl}assets/youtube-logo.svg`} alt="Logo YouTube"></img>
      </a>
      <a
        href="https://www.facebook.com/GuidanSesMelanie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${baseUrl}assets/facebook-logo.svg`}
          alt="Logo Facebook"
        ></img>
      </a>
      <PageOption
        pageUrl="/CGV"
        pageTitle="CGV"
        isActive={location.pathname === "/CGV"}
      />
    </footer>
  );
}

export default Footer;
