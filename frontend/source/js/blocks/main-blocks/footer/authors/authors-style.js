import styled from 'styled-components';

import elemOpacity from '../../../styles-data/mixins/transition';

import { BLACK_COLOR, MEDIA_SIZES } from '../../../styles-data/variables';

export const Section = styled.section`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${MEDIA_SIZES.md}) {
    flex-direction: row;
  }
`;

export const Info = styled.p`
  margin-bottom: 20px;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;

  @media (min-width: ${MEDIA_SIZES.lg}) {
    margin-bottom: 0;
    text-align: justify;
  }
`;

export const List = styled.ul`
  justify-content: center;

  @media (min-width: ${MEDIA_SIZES.lg}) {
    justify-content: space-between;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-of-type) {
    margin-right: 15px;
  }

  &:first-of-type {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: -1px;
      right: -8px;
      width: 2px;
      height: 100%;
      background-color: ${BLACK_COLOR};
    }
  }
`;

export const Side = styled.p`
  margin-right: 15px;
  font-size: 1.3rem;
  line-height: 1.3rem;
`;

export const LinkToProfile = styled.a`
  ${elemOpacity}

  & svg {
    width: 35px;
    height: 35px;
  }
`;
