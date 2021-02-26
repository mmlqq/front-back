import React from 'react';

import BasketIcon from '../../../../svg/basket-icon/basket-icon';

export default function Basket() {
  return (
    <a href="/basket" title="Ваша корзина" className="basket">
      <BasketIcon />
    </a>
  );
}
