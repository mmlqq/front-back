import React from 'react';
import PropTypes from 'prop-types';

import { Container, Headline } from './headline-container-style';

export default function HeadlineContainer({ headlineText, otherElem }) {
  return (
    <Container otherElem={Boolean(otherElem)}>
      <Headline otherElem={Boolean(otherElem)}>{headlineText}</Headline>
      {otherElem}
    </Container>
  );
}

HeadlineContainer.propTypes = {
  headlineText: PropTypes.string.isRequired,
  otherElem: PropTypes.node,
};

HeadlineContainer.defaultProps = {
  otherElem: null,
};
