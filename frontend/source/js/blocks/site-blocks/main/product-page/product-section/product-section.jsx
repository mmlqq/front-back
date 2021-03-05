import React from 'react';

import Filter from './filter/filter';
import Products from './products/products';

export default function ProductSection() {
  return (
    <section className="row product-section">
      <h2 className="visually-hidden">Фильтры и список продуктов</h2>
      <Filter />
      <Products />
    </section>
  );
}
