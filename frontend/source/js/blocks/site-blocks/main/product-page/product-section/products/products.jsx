import React from 'react';

import ContainerHeadline from '../../../../../universal/blocks/headline-container/headline-container';

import ProductList from '../../../../../universal/blocks/product-list/product-list';
import Sort from './sort/sort';

import mock from './product-list/mock/mock';

export default function Products() {
  return (
    <section className="col col-lg-9 products">
      <ContainerHeadline majorClass="products" headlineText="Сноуборды" otherElem={<Sort />} />
      <ProductList majorClass="products__list" bootstrapClass="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-0" list={mock[0].products} />
    </section>
  );
}
