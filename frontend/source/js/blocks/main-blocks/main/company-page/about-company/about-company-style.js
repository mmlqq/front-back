import styled from 'styled-components';

import highlightTextColor from '../../../../styles-data/mixins/highlight';
import elemOpacity from '../../../../styles-data/mixins/transition';

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
  ${elemOpacity}
`;
