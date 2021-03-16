import { css } from 'styled-components';

import { IMPORTANT_INFO_COLOR } from '../variables';

// Стили для важной информации (используется, например, в разделе Контакты и др)

const highlightTextColor = css`
  color: ${IMPORTANT_INFO_COLOR};
`;

export default highlightTextColor;
