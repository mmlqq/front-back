import styled from 'styled-components';

import highlightTextColor from '../../../../styles-data/mixins/highlight';

export const InfoContainer = styled.div`
  margin-bottom: 45px;
`;

export const Paragraph = styled.p`
  margin-bottom: 16px;
`;

export const ImportantInfo = styled.span`
  ${highlightTextColor}
`;
