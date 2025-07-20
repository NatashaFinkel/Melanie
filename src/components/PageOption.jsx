import { useNavigate } from "react-router-dom";

function PageOption({ pageUrl, optionClassName, pageTitle, icon, isActive }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(pageUrl);
  };

  return (
    <div className="menu-option">
      <a
        href={pageUrl}
        onClick={handleClick}
        className={`${optionClassName ? optionClassName : ""} ${
          isActive ? "active-link" : ""
        }`}
      >
        <span className="nav-icon">{icon}</span>
        <span className="nav-title">{pageTitle}</span>
      </a>
    </div>
  );
}

export default PageOption;
