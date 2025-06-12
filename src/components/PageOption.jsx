import PropTypes from "prop-types";

function PageOption({ pageUrl, optionClassName, pageTitle, icon, isActive }) {
  return (
    <div className="menu-option">
      <a
        href={pageUrl}
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

PageOption.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default PageOption;
