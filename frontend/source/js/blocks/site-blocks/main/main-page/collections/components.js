import styled from 'styled-components';

import { TRANSITION_DURATION } from '../../../../universal/styles-data/variables';

import { headlineUnderline } from '../../../../universal/styles-data/common-styles/headline';
import underline from '../../../../universal/styles-data/common-styles/underline';

export const Section = styled.section`
  margin-bottom: 25px;
`;

export const ButtonsContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  ${underline}
`;

export const ButtonsList = styled.ul`
  display: flex;
`;

export const ButtonItem = styled.li`
  margin-right: 15px;

  &:not(:first-of-type) {
    margin: 0 15px;
  }
`;

export const CollectionType = styled.button`
  font-size: 1.3rem;
  line-height: 1.3rem;
  transition: opacity ${TRANSITION_DURATION};
  ${(props) => props.active && headlineUnderline}

  &:hover,
  &:focus {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }
`;
