import styled from 'styled-components';

import highlightTextColor from '../../../../universal/styles-data/common-styles/highlight';

import { TRANSITION_DURATION } from '../../../../universal/styles-data/variables';

export const Section = styled.section`
  & iframe {
    width: 100%;
  }
`;

export const List = styled.ul`
  margin-bottom: 15px;
`;

export const Item = styled.li`
  margin-bottom: 20px;

  & span,
  & a {
    margin-left: 15px;
    ${highlightTextColor}
  }
`;

export const Link = styled.a`
  transition: opacity ${TRANSITION_DURATION};
  &:hover {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }
`;
