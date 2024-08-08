import React from 'react';
import PropTypes from 'prop-types';

function HeaderPageOption({ pageUrl, pageTitle }) {
    return (
        <div className="menu-option">
            <a href={pageUrl} className="nav-option">{pageTitle}</a>
        </div>
    );
}

HeaderPageOption.propTypes = {
    pageUrl: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
};

export default HeaderPageOption;
