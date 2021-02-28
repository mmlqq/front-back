import React from 'react';

import Navigation from './navigation/navigation';
import Basket from './basket/basket';

export default function TopBar() {
  return (
    <section className="top-bar">
      <h2 className="visually-hidden">Навигационная панель</h2>
      <Navigation />
      <Basket />
    </section>
  );
}
