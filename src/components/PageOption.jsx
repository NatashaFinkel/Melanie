import PropTypes from "prop-types";

function PageOption({ pageUrl, optionClassName, pageTitle }) {
  return (
    <div className="menu-option">
      <a href={pageUrl} className={optionClassName}>
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
