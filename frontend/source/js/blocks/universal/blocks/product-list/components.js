import styled from 'styled-components';

import linkInteractiveStyle from '../../styles-data/common-styles/link-interactive-style';

export const List = styled.ul`
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.figure`
  position: relative;
`;

export const Price = styled.figcaption`
  position: absolute;
  bottom: 1.5%;
  padding: 5px;
  font-family: $perfectDOS;
  background-color: $white-color;
`;

export const LinkToProduct = styled.a`
  margin: 0 10%;
  text-align: center;
  ${linkInteractiveStyle}
`;
