import styled from 'styled-components';

import SectionBlock from '../../../../../universal/blocks/section/section';

import { BLACK_COLOR, DEFAULT_MARGIN_BOTTOM, GRAY_COLOR, MEDIA_SIZES, OUTLINE_COLOR, TRANSITION_DURATION } from '../../../../../styles-data/variables';

const checkBoxSize = 13;

export const Section = styled(SectionBlock)`
  margin-bottom: calc(${DEFAULT_MARGIN_BOTTOM} * 2);

  @media (min-width: ${MEDIA_SIZES.lg}) {
    margin-bottom: 0;
  }
`;

export const FilterSection = styled.fieldset`
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: none;
`;

export const FilterName = styled.legend`
  position: relative;
  padding-right: 20px;
  width: 100%;
  transition: opacity ${TRANSITION_DURATION};
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background: url("assets/img/plus.svg") no-repeat center center;
    background-size: cover;
  }

  &.active::after {
    background-image: url("assets/img/minus.svg");
  }

  &:hover {
    opacity: .6;
  }

  &.active ~ ${OptionsContainer} {
    margin: 15px 0;
    display: block;
  }
`;

export const OptionItem = styled.li`
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  position: relative;
  padding-left: 25px;
  display: block;
  cursor: pointer;
  transition: opacity ${TRANSITION_DURATION};

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: ${checkBoxSize}px;
    height: ${checkBoxSize}px;
    border: 1px solid ${BLACK_COLOR};
    border-radius: 30%;
    transform: translateY(-50%);
    transition: background-color, opacity, ${TRANSITION_DURATION};
  }
`;

export const Input = styled.input`
  &:checked + ${InputLabel}::after {
    position: absolute;
    content: "";
    top: 50%;
    left: calc(${checkBoxSize}px / 2 - 1.5px);
    width: 5px;
    height: 5px;
    background-color: ${BLACK_COLOR};
    border-radius: 50%;
    transform: translateY(-50%);
    transition: background-color ${TRANSITION_DURATION};
  }

  &:hover + ${InputLabel},
  &:focus + ${InputLabel} {
    opacity: .6;
  }

  &:active + ${InputLabel} {
    opacity: .3;
  }

  &:hover + ${InputLabel}::before {
    background-color: ${GRAY_COLOR};
  }

  &:focus + ${InputLabel}::before {
    outline: 2px solid ${OUTLINE_COLOR};
  }

  &:active + ${InputLabel}::before {
    opacity: .5;
  }

  &:active + ${InputLabel}::after {
    background-color: ${OUTLINE_COLOR};
  }
`;

export const SubmitButton = styled.button`
  padding: 5px 10px;
  width: 100%;
  border: 2px solid ${BLACK_COLOR};
  transition: box-shadow ${TRANSITION_DURATION};

  &:hover,
  &:focus {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .6) inset;
  }

  &:active {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, .8) inset;
  }
`;
