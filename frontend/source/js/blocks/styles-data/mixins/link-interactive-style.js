import { css } from 'styled-components';
import { BLACK_COLOR, TRANSPARENT, TRANSITION_DURATION } from '../variables';

// Интерактивный стиль для всех ссылок

const linkInteractiveStyle = css`
  border-bottom: 1px solid ${TRANSPARENT};
  transition: border-bottom-color, opacity, ${TRANSITION_DURATION};

  &:hover {
    border-bottom-color: ${BLACK_COLOR};
  }

  &:active {
    opacity: .3;
  }
`;

export default linkInteractiveStyle;
