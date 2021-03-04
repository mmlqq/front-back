import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BasketIcon from '../../../../svg/basket-icon/basket-icon';

export default function Basket() {
  const [sum, setSum] = useState(0);

  return (
    <Link to="/basket" className="col-auto basket" title="Корзина">
      <BasketIcon />
      {`Корзина: ${sum} руб`}
    </Link>
  );
}
