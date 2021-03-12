import { css } from 'styled-components';

import { UNDERLINE_HEADLINE_COLOR } from '../variables';

export const headlineUnderline = css`
  margin-bottom: -2px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${UNDERLINE_HEADLINE_COLOR};
`;

export const headlineFontNormal = css`
  font-weight: 400;
`;
