import styled from 'styled-components';

import '../../../../../img/svg/loupe.svg';

import { DEFAULT_PADDING, BLACK_COLOR, WHITE_COLOR, MEDIA_SIZES, TRANSITION_DURATION } from '../../../styles-data/variables';

export const Section = styled.section`
  padding: 0 ${DEFAULT_PADDING};
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;

  @media (min-width: ${MEDIA_SIZES.md}) {
    width: 60%;
  }
`;

export const Input = styled.input`
  padding: 10px 55px 10px 20px;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${BLACK_COLOR};
  border: 1px solid ${BLACK_COLOR};
  background: url('assets/img/loupe.svg') no-repeat 98% center;
  background-color: ${WHITE_COLOR};
  background-size: 30px;

  &::placeholder {
    color: $black-color;
    transition: all, ${TRANSITION_DURATION};
  }

  &:hover::placeholder,
  &:focus::placeholder {
    transform: translateX(-1000px);
  }
`;
