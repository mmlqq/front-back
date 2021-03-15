import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import linkInteractiveStyle from '../../styles-data/common-styles/link-interactive-style';

import { CURRENT_PAGE_CLASS } from '../../styles-data/variables';

const LinkTo = styled(NavLink)`
  ${linkInteractiveStyle}
  &.${CURRENT_PAGE_CLASS} {
    color: #A52A2A;
  }
`;

export default LinkTo;
