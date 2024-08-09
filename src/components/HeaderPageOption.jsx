import React from 'react';
import PropTypes from 'prop-types';

function HeaderPageOption({ pageUrl, optionClassName, pageTitle }) {
    return (
        <div className="menu-option">
            <a href={pageUrl} className={optionClassName}>{pageTitle}</a>
        </div>
    );
}

HeaderPageOption.propTypes = {
    pageUrl: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
};

export default HeaderPageOption;
