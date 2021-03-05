import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Arrow from '../../../svg/arrow-icon/arrow-icon';

export default function ArrowButton({ majorClass, side, conditionForDisable }) {
  return (
    <button className={classNames('arrow-button', majorClass && `${majorClass}`)} aria-label={side === 'left' ? 'Предыдущий слайд' : 'Следующий слайд'} data-side={side} type="button" disabled={conditionForDisable}>
      <Arrow />
    </button>
  );
}

ArrowButton.propTypes = {
  side: PropTypes.string.isRequired,
  majorClass: PropTypes.string,
  conditionForDisable: PropTypes.bool,
};

ArrowButton.defaultProps = {
  majorClass: null,
  conditionForDisable: null,
};
