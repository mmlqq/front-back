import React from 'react';
import PropTypes from 'prop-types';

import Section from './products-style';

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
    <Section className="col col-lg-9">
      <ContainerHeadline headlineText={getSectionName()} otherElem={<Sort />} />
      <ProductList bootstrapClass="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-0" list={defineCategory().products} />
    </Section>
  );
}

Products.propTypes = {
  location: PropTypes.string.isRequired,
};
