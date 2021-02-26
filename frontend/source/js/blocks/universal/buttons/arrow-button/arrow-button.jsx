import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Arrow from '../../../svg/arrow-icon/arrow-icon';

export default function ArrowButton({ side }) {
  return (
    <button className={classNames('arrow-button', `arrow-button--${side}`)} aria-label={side === 'left' ? 'Предыдущий слайд' : 'Следующий слайд'} type="button">
      <Arrow />
    </button>
  );
}

ArrowButton.propTypes = {
  side: PropTypes.string.isRequired,
};
