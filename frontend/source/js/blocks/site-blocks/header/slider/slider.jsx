import React from 'react';

import '../../../../../img/logo-placeholder.png';
import '../../../../../img/slider_1.jpg';

export default function Slider() {
  return (
    <section className="slider">
      <h2 className="visually-hidden">Блок со слайдером</h2>
      <div className="slider__wrapper">
        <figure className="slider__logo-container">
          <img src="assets/img/logo-placeholder.png" alt="Логотип магазина" />
        </figure>
        <ul className="slider__list">
          <li className="slider__item">
            <figure className="slider__slider-container">
              <img src="assets/img/slider_1.jpg" alt="Картинка слайдера" />
              <figcaption className="slider__slider-text">Быстрая доставка до двери</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
