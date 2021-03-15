import styled, { css } from 'styled-components';

import underline from '../../styles-data/common-styles/underline';
import { headlineFontNormal, headlineUnderline } from '../../styles-data/common-styles/headline';

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  ${underline}
  ${(props) => props.otherElem && css`
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  `}
`;

export const Headline = styled.h2`
  ${headlineUnderline}
  ${headlineFontNormal}
  ${(props) => props.otherElem && css`
    margin-right: 25px;
  `}
`;
