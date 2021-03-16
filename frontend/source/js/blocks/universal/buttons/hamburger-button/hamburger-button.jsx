import React from 'react';
import PropTypes from 'prop-types';

import Button from './hamburger-menu-style';

import HamburgerIcon from '../../../svg/hamburger-icon/hamburger-icon';

export default function HamburgerButton({ handler }) {
  return (
    <Button className="col-auto" type="button" onClick={handler}>
      <HamburgerIcon />
    </Button>
  );
}

HamburgerButton.propTypes = {
  handler: PropTypes.func.isRequired,
};
