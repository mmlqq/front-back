import React from 'react';
import PropTypes from 'prop-types';

import HamburgerIcon from '../../../svg/hamburger-icon/hamburger-icon';

export default function HamburgerButton({ handler }) {
  return (
    <button className="col-auto hamburger-button" type="button" onClick={handler}>
      <HamburgerIcon />
    </button>
  );
}

HamburgerButton.propTypes = {
  handler: PropTypes.func.isRequired,
};
