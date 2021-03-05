import React from 'react';

import HeadlineContainer from '../../../../universal/blocks/headline-container/headline-container';

export default function AboutCompany() {
  return (
    <section className="about-company">
      <HeadlineContainer headlineText="О компании" />
      <figure className="about-company__image-container">
        <img src="assets/img/slider-placeholder.png" alt="Картинка" />
      </figure>
      <div className="about-company__information-container">
        <p className="about-company__text">Добро пожаловать на сайт магазина сноубордов и другой зимней атрибутики.</p>
        <p className="about-company__text">
          Мы с радостью принимаем и обслуживаем заказы 7 дней в неделю с 10 до 18 по московскому времени.
          <br />
          Телефон и адрес вы можете узнать в разделе <a href="#/contacts" className="about-company__link">Контакты</a>.
          <br />
          Доставка возможна как по Москве, так и в регионы.
        </p>
      </div>
    </section>
  );
}
