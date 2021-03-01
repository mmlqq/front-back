/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react';

import classNames from 'classnames';

import buttonsType from './data/buttons-type';
import mock from './data/mock';

import '../../../../../img/product-placeholder.png';

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState(mock[0]);

  const listMarkup = useMemo(() => activeCollection.products.map((collection, index) => (
    <li key={index} className="collections__product-item">
      <figure className="collections__product-img-container">
        <img src={collection.imgSrc} alt="Картинка товара" />
        <figcaption className="collections__product-price">{`${collection.price} руб`}</figcaption>
      </figure>
      <a href="test" className="link collections__product-link">{collection.name}</a>
    </li>
  )), [activeCollection]);

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
    <section className="collections">
      <h2 className="visually-hidden">Новые и популярные товары</h2>
      <div className="collections__buttons-container">
        <ul className="collections__buttons-list" onClick={changeCollections}>
          {buttonsType.map((button) => (
            <li key={button} className="collections__button-item">
              <button className={classNames('collections__type-button', button === activeCollection.type && 'headline')} type="button">{button}</button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="collections__products-list">
        {listMarkup}
      </ul>
    </section>
  );
}
