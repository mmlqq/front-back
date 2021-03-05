import React from 'react';

export default function DeliveryAndPayment() {
  return (
    <section className="delivery-and-payment">
      <div className="delivery-and-payment__headline-container">
        <h2 className="delivery-and-payment__headline">Доставка</h2>
      </div>
      <div className="delivery-and-payment__info-container">
        <p className="delivery-and-payment__text">Наш интернет-магазин осуществляет доставку по Москве и регионам России:</p>
        <ol className="delivery-and-payment__list">
          <li className="delivery-and-payment__item">Курьерская доставка по Москве - <span className="delivery-and-payment__important-info">200 руб.</span></li>
          <li className="delivery-and-payment__item">Почтовая доставка по России - <span className="delivery-and-payment__important-info">от 150 руб.</span> в зависимости от адреса доставки.</li>
        </ol>
      </div>
      <div className="delivery-and-payment__info-container">
        <p className="delivery-and-payment__text">
          По Москве и в пределах МКАД курьерская доставка осуществляется в рабочие дни <span className="delivery-and-payment__important-info">с 10.00 до 20.00.</span>
        </p>
        <p className="delivery-and-payment__text delivery-and-payment__text--margin-bottom">Заказы доставляются на следующий день после его оформления</p>
      </div>
      <div className="delivery-and-payment__info-container">
        <p className="delivery-and-payment__text">Заказы, оформленные до 12:00 текущего дня, мы стараемся доставлять в этот же день.</p>
        <p className="delivery-and-payment__text">Стоимость доставки по Москве составляет 300 рублей, оплата курьеру осуществляется наличными при получении товара и после тщательной проверки заказа.</p>
        <p className="delivery-and-payment__text">Доставка курьером за МКАД высчитывается индивидуально.</p>
      </div>
    </section>
  );
}
