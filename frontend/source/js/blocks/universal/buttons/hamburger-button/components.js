import styled from 'styled-components';

import { MEDIA_SIZES } from '../../styles-data/variables';

const Button = styled.button`
  @media (min-width: ${MEDIA_SIZES.md}) {
    display: none;
  }
`;

export default Button;
