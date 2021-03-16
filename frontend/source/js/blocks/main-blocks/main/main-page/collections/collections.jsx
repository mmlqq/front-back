import React, { useState, useMemo } from 'react';

import Section from '../../../../universal/blocks/section/section';
import { ButtonsContainer, ButtonsList, ButtonItem, CollectionType } from './collections-style';

import ProductList from '../../../../universal/blocks/product-list/product-list';

import mock from './mock/mock';

import '../../../../../../img/product-placeholder.png';

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState(mock[0]);

  // Мемоизация значений для кнопок секций

  const buttonsType = useMemo(() => mock.map((collection) => collection.type), [mock]);

  //

  // Мемоизирую компонент

  const productList = useMemo(() => (
    <ProductList
      bootstrapClass="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-0"
      list={activeCollection.products}
    />
  ), [activeCollection]);

  //

  // Получаю нужный массив на основе выбранного collectionType

  function getCollection(type) {
    return mock.find((section) => section.type === type);
  }

  //

  // Изменяю state при клике на кнопки

  function changeCollections(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      setActiveCollection(getCollection(e.target.textContent));
    }
  }

  //

  return (
    <Section>
      <h2 className="visually-hidden">Новые и популярные товары</h2>
      <ButtonsContainer>
        <ButtonsList onClick={changeCollections}>
          {buttonsType.map((button) => (
            <ButtonItem key={button}>
              <CollectionType type="button" active={button === activeCollection.type}>{button}</CollectionType>
            </ButtonItem>
          ))}
        </ButtonsList>
      </ButtonsContainer>
      {productList}
    </Section>
  );
}
