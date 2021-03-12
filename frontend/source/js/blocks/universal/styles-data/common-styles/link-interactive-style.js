import { css } from 'styled-components';
import { BLACK_COLOR, TRANSPARENT, TRANSITION_DURATION } from '../variables';

const linkInteractiveStyle = css`
  border-bottom: 1px solid ${TRANSPARENT};
  transition: border-bottom-color, opacity, ${TRANSITION_DURATION};

  &:hover {
    border-bottom-color: ${BLACK_COLOR};
  }

  &:active {
    opacity: .5;
  }
`;

export default linkInteractiveStyle;
