import React from 'react';
import PropTypes from 'prop-types';

import ContainerHeadline from '../../../../../universal/blocks/headline-container/headline-container';

import ProductList from '../../../../../universal/blocks/product-list/product-list';
import Sort from './sort/sort';

import mock from './product-list/mock/mock';

export default function Products({ location }) {
  // По категории определяет, какие данные отдать.

  function defineCategory() {
    return mock.find((section) => location.includes(section.sectionName.toLowerCase()));
  }

  //

  // Нахожу имя текущего раздела

  function getSectionName() {
    return mock.map((section) => section.sectionName).find((sectionName) => location.includes(sectionName.toLowerCase()));
  }

  //

  return (
    <section className="col col-lg-9 products">
      <ContainerHeadline majorClass="products" headlineText={getSectionName()} otherElem={<Sort />} />
      <ProductList majorClass="products__list" bootstrapClass="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-0" list={defineCategory().products} />
    </section>
  );
}

Products.propTypes = {
  location: PropTypes.string.isRequired,
};