import React, { useState } from 'react';
import $ from 'jquery';

import Section from '../section/section';
import { Wrapper, LogoContainer, SliderButton as ArrowButton, List, SliderContainer, SliderText } from './slider-style';

import mock from './mock/mock';

import '../../../../../img/logo-placeholder.png';
import '../../../../../img/slider-placeholder.png';

export default function Slider() {
  const [sliderCount, setSliderCount] = useState(1);
  const PERCENT = 100;
  const STEP_RIGHT = 0;
  const STEP_LEFT = 200;

  // Смещение по оси X после клика на стрелку слайдера.

  function doTranslateX(list, side) {
    switch (side) {
      case 'right':
        if (list.children.length !== sliderCount) {
          $(list).animate({ left: `${(STEP_RIGHT - (sliderCount * PERCENT))}%` }, 500);
          setSliderCount((prevState) => prevState + 1);
        }
        break;
      case 'left':
        if (sliderCount !== 1) {
          $(list).animate({ left: `${STEP_LEFT - (sliderCount * PERCENT)}%` }, 500);
          setSliderCount((prevState) => prevState - 1);
        }
        break;
      default:
        break;
    }
  }

  //

  // Обработчик для карусели.

  function changeSliderHandler(e) {
    e.preventDefault();
    if (e.target.closest('button')) {
      const button = e.target.closest('button');
      const side = button.getAttribute('data-side');
      const sliderContainer = button.parentNode.querySelector('ul');
      doTranslateX(sliderContainer, side);
    }
  }

  //

  return (
    <Section>
      <h2 className="visually-hidden">Блок со слайдером</h2>
      <Wrapper onClick={changeSliderHandler}>
        <LogoContainer>
          <img src="assets/img/logo-placeholder.png" alt="Логотип магазина" />
        </LogoContainer>
        <ArrowButton side="left" conditionForDisable={sliderCount === 1} />
        <List className="row row-cols-1 g-0">
          {mock.map((item) => (
            <li key={item.id} className="col">
              <SliderContainer>
                <img src={item.srcImg} alt={item.alt} />
                <SliderText>{item.description}</SliderText>
              </SliderContainer>
            </li>
          ))}
        </List>
        <ArrowButton side="right" conditionForDisable={sliderCount === mock.length} />
      </Wrapper>
    </Section>
  );
}
