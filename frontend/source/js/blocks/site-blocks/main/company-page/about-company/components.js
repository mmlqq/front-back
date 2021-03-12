import styled from 'styled-components';

import highlightTextColor from '../../../../universal/styles-data/common-styles/highlight';

import { TRANSITION_DURATION } from '../../../../universal/styles-data/variables';

export const ImageContainer = styled.figure`
  margin-bottom: 35px;

  & img {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 30px;
`;

export const Link = styled.a`
  ${highlightTextColor}

  transition: opacity ${TRANSITION_DURATION};

    &:hover {
      opacity: .6;
    }

    &:active {
      opacity: .3;
    }
`;
