/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import $ from 'jquery';

import ArrowButton from '../../../universal/buttons/arrow-button/arrow-button';

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
    <section className="slider">
      <h2 className="visually-hidden">Блок со слайдером</h2>
      <div className="slider__wrapper" onClick={changeSliderHandler}>
        <figure className="slider__logo-container">
          <img src="assets/img/logo-placeholder.png" alt="Логотип магазина" />
        </figure>
        <ArrowButton majorClass="slider__shift-button" side="left" />
        <ul className="row row-cols-1 g-0 slider__list">
          {mock.map((item) => (
            <li key={item.id} className="col slider__item">
              <figure className="slider__slider-container">
                <img src={item.srcImg} alt={item.alt} />
                <figcaption className="slider__slider-text">{item.description}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <ArrowButton majorClass="slider__shift-button" side="right" />
      </div>
    </section>
  );
}
