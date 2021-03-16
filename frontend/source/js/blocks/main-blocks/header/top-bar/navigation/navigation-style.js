import styled from 'styled-components';

import { TRANSPARENT, MEDIA_SIZES } from '../../../../styles-data/variables';

export const Nav = styled.nav`
  position: absolute;

  ${(props) => (!props.active
    ? `
        top: 0;
        left: 0;
        display: none;
      `
    : `
        top: -1000%;
        left: 50%;
        padding: 20px;
        display: block;
        transform: translateX(-50%);
        background-color: #999696;
        z-index: 1000;
      `)}

  @media (min-width: ${MEDIA_SIZES.md}) {
    position: static;
    display: block;

    ${(props) => props.active && `
      padding: 0;
      background-color: ${TRANSPARENT};
      transform: none;
    `}
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: ${MEDIA_SIZES.md}) {
    margin: 0 15px;

    &:first-of-type {
      margin: 0;
      margin-right: 5px;
    }

    &:last-of-type {
      margin: 0;
      margin-left: 5px;
    }
  }
`;
