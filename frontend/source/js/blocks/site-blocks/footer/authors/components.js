import styled from 'styled-components';

import { BLACK_COLOR, TRANSITION_DURATION, MEDIA_SIZES } from '../../../universal/styles-data/variables';

export const Section = styled.section.attrs({ className: 'row row-cols-sm-1 row-cols-lg-auto g-0' })`
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
  line-height: 1.4rem;
  text-align: center;

  @media (min-width: ${MEDIA_SIZES.lg}) {
    margin-bottom: 0;
    text-align: justify;
  }
`;

export const List = styled.ul.attrs({ className: 'row row-cols-auto g-0' })`
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
  transition: opacity ${TRANSITION_DURATION};

  & svg {
    width: 35px;
    height: 35px;
  }

  &:hover,
  &:focus {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }
`;
