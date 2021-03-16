import styled from 'styled-components';

import highlightTextColor from '../../../../styles-data/mixins/highlight';
import elemOpacity from '../../../../styles-data/mixins/transition';

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
  ${elemOpacity}
`;
