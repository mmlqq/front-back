import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { WHITE_COLOR } from '../../styles-data/variables';

import underline from '../../styles-data/common-styles/underline';

export const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${WHITE_COLOR};
  z-index: 100;
`;

export const WarningText = styled.p`
  margin-bottom: 35px;
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const LinkTo = styled(Link)`
  font-size: 1.5rem;
  line-height: 1.5rem;
  transition: opacity .5s;
  ${underline}

  &:hover {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }
`;
