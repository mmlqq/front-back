import styled from 'styled-components';

import { DEFAULT_PADDING, BLACK_COLOR, MEDIA_SIZES } from '../../../universal/styles-data/variables';

export const Nav = styled.nav`
  margin-bottom: 10px;
  padding: ${DEFAULT_PADDING};
  border-top: 1px solid ${BLACK_COLOR};
  border-bottom: 1px solid ${BLACK_COLOR};
`;

export const List = styled.ul`
  justify-content: center;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  padding: 0 10px;
  text-align: center;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: ${MEDIA_SIZES.md}) {
    margin: 0 20px;
  }
`;
