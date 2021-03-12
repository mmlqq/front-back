import styled from 'styled-components';

import { Link } from 'react-router-dom';

import linkInteractiveStyle from '../../../../universal/styles-data/common-styles/link-interactive-style';

const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  ${linkInteractiveStyle}

  & svg {
    margin-right: 5px;
  }
`;

export default LinkTo;
