import { css } from 'styled-components';

import { TRANSITION_DURATION } from '../variables';

// Стили с opacity

const elemOpacity = css`
  transition: opacity ${TRANSITION_DURATION};

  &:hover,
  &:focus {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }
`;

export default elemOpacity;
