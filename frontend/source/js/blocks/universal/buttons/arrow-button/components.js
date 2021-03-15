import styled from 'styled-components';

import { MEDIA_SIZES, TRANSITION_DURATION } from '../../styles-data/variables';

const Button = styled.button`
  width: 30px;
  height: 30px;
  transition: opacity, ${TRANSITION_DURATION};

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:active {
    opacity: .2;
  }

  & svg {
    width: 100%;
    height: 100%;
    transition: width, height, ${TRANSITION_DURATION};
  }

  &[data-side="left"] svg {
    transform: rotate(180deg);
  }

  &:disabled {
    & svg {
      width: 50%;
      height: 50%;
      opacity: .3;
    }
  }

  @media (min-width: ${MEDIA_SIZES.md}) {
    width: 50px;
    height: 50px;
  }
`;

export default Button;
