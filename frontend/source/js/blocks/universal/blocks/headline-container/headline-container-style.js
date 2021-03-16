import styled, { css } from 'styled-components';

import underline from '../../../styles-data/mixins/underline';
import { headlineFontNormal, headlineUnderline } from '../../../styles-data/mixins/headline';

import { DEFAULT_MARGIN_BOTTOM } from '../../../styles-data/variables';

export const Container = styled.div`
  margin-bottom: ${DEFAULT_MARGIN_BOTTOM};
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
