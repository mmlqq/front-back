import React from 'react';

import { useLocation } from 'react-router-dom';

import Filter from './filter/filter';
import Products from './products/products';

export default function ProductSection() {
  const location = useLocation();

  return (
    <section className="row product-section">
      <h2 className="visually-hidden">Фильтры и список продуктов</h2>
      <Filter />
      <Products location={location.pathname} />
    </section>
  );
}
