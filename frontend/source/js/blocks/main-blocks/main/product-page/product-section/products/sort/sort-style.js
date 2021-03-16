import styled from 'styled-components';

import { BLACK_COLOR, TRANSITION_DURATION } from '../../../../../../styles-data/variables';

export const Form = styled.form`
  margin-top: 10px;
`;

export const Select = styled.select`
  padding: 5px 10px;
  font-size: inherit;
  line-height: inherit;
  color: rgba(0, 0, 0, .5);
  transition: color ${TRANSITION_DURATION};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${BLACK_COLOR};
  }
`;

export const Option = styled.option`
  font-size: inherit;
  line-height: inherit;
`;
