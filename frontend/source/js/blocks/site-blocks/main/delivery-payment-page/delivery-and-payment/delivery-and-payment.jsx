import React from 'react';

import { InfoContainer, Paragraph, ImportantInfo } from './components';

import HeadlineContainer from '../../../../universal/blocks/headline-container/headline-container';

export default function DeliveryAndPayment() {
  return (
    <section>
      <HeadlineContainer headlineText="Доставка" />
      <InfoContainer>
        <Paragraph>Наш интернет-магазин осуществляет доставку по Москве и регионам России:</Paragraph>
        <ol>
          <li>Курьерская доставка по Москве - <ImportantInfo>200 руб.</ImportantInfo></li>
          <li>Почтовая доставка по России - <ImportantInfo>от 150 руб.</ImportantInfo> в зависимости от адреса доставки.</li>
        </ol>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>
          По Москве и в пределах МКАД курьерская доставка осуществляется в рабочие дни <ImportantInfo>с 10.00 до 20.00.</ImportantInfo>
        </Paragraph>
        <Paragraph>Заказы доставляются на следующий день после его оформления</Paragraph>
      </InfoContainer>
      <InfoContainer>
        <Paragraph>Заказы, оформленные до 12:00 текущего дня, мы стараемся доставлять в этот же день.</Paragraph>
        <Paragraph>Стоимость доставки по Москве составляет 300 рублей, оплата курьеру осуществляется наличными при получении товара и после тщательной проверки заказа.</Paragraph>
        <Paragraph>Доставка курьером за МКАД высчитывается индивидуально.</Paragraph>
      </InfoContainer>
    </section>
  );
}
