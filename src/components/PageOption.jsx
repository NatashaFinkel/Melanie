import PropTypes from "prop-types";

function PageOption({ pageUrl, optionClassName, pageTitle, isActive }) {
  return (
    <div className="menu-option">
      <a
        href={pageUrl}
        className={`${optionClassName ? optionClassName : ""} ${
          isActive ? "active-link" : ""
        }
        `}
      >
        {pageTitle}
      </a>
    </div>
  );
}

PageOption.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default PageOption;
