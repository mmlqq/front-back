import React from 'react';

import ProductList from '../../../../universal/blocks/product-list/product-list';
import Sort from './sort/sort';

import mock from './product-list/mock/mock';

export default function Products() {
  return (
    <section className="col col-lg-9 products">
      <div className="products__headline-container">
        <h2 className="products__headline">Сноуборды</h2>
        <Sort />
      </div>
      <ProductList majorClass="products__list" bootstrapClass="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-0" list={mock[0].products} />
    </section>
  );
}
