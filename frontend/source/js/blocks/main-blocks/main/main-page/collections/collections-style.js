import styled from 'styled-components';

import { headlineUnderline } from '../../../../styles-data/mixins/headline';
import underline from '../../../../styles-data/mixins/underline';
import elemOpacity from '../../../../styles-data/mixins/transition';

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
  line-height: 1.7rem;
  ${elemOpacity}
  ${(props) => props.active && headlineUnderline}
`;
