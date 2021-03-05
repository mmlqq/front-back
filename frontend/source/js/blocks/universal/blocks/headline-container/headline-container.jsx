import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export default function HeadlineContainer({ majorClass, headlineText, otherElem }) {
  return (
    <div className={classNames('headline-container', majorClass && `${majorClass}__headline-container`)}>
      <h2 className={classNames('headline-container__headline', majorClass && `${majorClass}__headline`)}>{headlineText}</h2>
      {otherElem}
    </div>
  );
}

HeadlineContainer.propTypes = {
  majorClass: PropTypes.string,
  headlineText: PropTypes.string.isRequired,
  otherElem: PropTypes.node,
};

HeadlineContainer.defaultProps = {
  majorClass: null,
  otherElem: null,
};
