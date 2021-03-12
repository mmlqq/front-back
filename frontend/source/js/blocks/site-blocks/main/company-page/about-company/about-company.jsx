import React from 'react';

import { ImageContainer, Paragraph, Link } from './components';

import HeadlineContainer from '../../../../universal/blocks/headline-container/headline-container';

export default function AboutCompany() {
  return (
    <section>
      <HeadlineContainer headlineText="О компании" />
      <ImageContainer>
        <img src="assets/img/slider-placeholder.png" alt="Картинка" />
      </ImageContainer>
      <div>
        <Paragraph>Добро пожаловать на сайт магазина сноубордов и другой зимней атрибутики.</Paragraph>
        <Paragraph>
          Мы с радостью принимаем и обслуживаем заказы 7 дней в неделю с 10 до 18 по московскому времени.
          <br />
          Телефон и адрес вы можете узнать в разделе <Link href="#/contacts">Контакты</Link>.
          <br />
          Доставка возможна как по Москве, так и в регионы.
        </Paragraph>
      </div>
    </section>
  );
}
