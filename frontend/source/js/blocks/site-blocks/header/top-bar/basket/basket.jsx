import React, { useState } from 'react';

import LinkTo from './components';

import BasketIcon from '../../../../svg/basket-icon/basket-icon';

export default function Basket() {
  const [sum, setSum] = useState(0);

  return (
    <LinkTo to="/basket" className="col-auto basket" title="Корзина">
      <BasketIcon />
      {`Корзина: ${sum} руб`}
    </LinkTo>
  );
}
