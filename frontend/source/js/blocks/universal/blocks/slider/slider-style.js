import styled from 'styled-components';

import ArrowButton from '../../buttons/arrow-button/arrow-button';

import { MEDIA_SIZES, WHITE_COLOR } from '../../../styles-data/variables';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const LogoContainer = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  display: none;
  z-index: 1;

  & img {
    width: 100%;
  }

  @media (min-width: ${MEDIA_SIZES.md}) {
    display: block;
  }
`;

export const SliderButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

export const List = styled.ul`
  position: relative;
  left: 0;
  flex-wrap: nowrap;
`;

export const SliderContainer = styled.figure`
  position: relative;

  & img {
    width: 100%;
  }
`;

export const SliderText = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px 5px;
  width: 70%;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  transform: translate(-50%, -50%);
  color: ${WHITE_COLOR};
  background-color: rgba(0, 0, 0, .5);

  @media (min-width: ${MEDIA_SIZES.md}) {
    padding: 20px;
    width: auto;
    font-size: 1.5rem;
  }
`;
