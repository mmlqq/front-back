import React, { useState, useMemo } from 'react';

import { Section, ButtonsContainer, ButtonsList, ButtonItem, CollectionType } from './components';

import ProductList from '../../../../universal/blocks/product-list/product-list';

import buttonsType from './data/buttons-type';
import mock from './data/mock';

import '../../../../../../img/product-placeholder.png';

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState(mock[0]);

  // Мемоизирую компонент

  const productList = useMemo(() => (
    <ProductList
      majorClass="collections__product-list"
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
