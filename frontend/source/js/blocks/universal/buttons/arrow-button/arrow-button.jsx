import React from 'react';
import PropTypes from 'prop-types';

import Button from './arrow-button-style';
import Arrow from '../../../svg/arrow-icon/arrow-icon';

export default function ArrowButton({ className, side, conditionForDisable }) {
  return (
    <Button className={className} aria-label={side === 'left' ? 'Предыдущий слайд' : 'Следующий слайд'} data-side={side} type="button" disabled={conditionForDisable}>
      <Arrow />
    </Button>
  );
}

ArrowButton.propTypes = {
  className: PropTypes.string,
  side: PropTypes.string.isRequired,
  conditionForDisable: PropTypes.bool,
};

ArrowButton.defaultProps = {
  className: null,
  conditionForDisable: null,
};
