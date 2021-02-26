import React from 'react';

import Basket from './basket/basket';
import Login from './login/login';

export default function LoginAndBasket() {
  return (
    <section className="login-and-basket">
      <h2 className="visually-hidden">Кнопка авторизации и корзины</h2>
      <Basket />
      <Login />
    </section>
  );
}
