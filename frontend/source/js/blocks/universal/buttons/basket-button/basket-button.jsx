import React from 'react';

import Basket from '../../../svg/basket-icon/basket-icon';

export default function BasketButton() {
  return (
    <section className="basket-button">
      <h2 className="visually-hidden">Корзина</h2>
      <a href="/basket" className="basket-button__link">
        <Basket />
      </a>
    </section>
  );
}
