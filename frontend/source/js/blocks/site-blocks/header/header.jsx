import React from 'react';

import UserCity from './user-city/user-city';
import LoginAndBasket from './login-and-basket/login-and-basket';

export default function Header() {
  return (
    <header className="container header">
      <UserCity />
      <LoginAndBasket />
    </header>
  );
}
