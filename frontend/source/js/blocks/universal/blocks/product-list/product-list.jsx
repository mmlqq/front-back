import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export default function ProductList({ majorClass, bootstrapClass, list }) {
  return (
    <ul className={classNames('product-list', majorClass, bootstrapClass)}>
      {list.map((item, index) => (
        <li key={index} className="product-list__item">
          <figure className="product-list__product-img-container">
            <img src={item.imgSrc} alt="Товар" />
            <figcaption className="product-list__product-price">{`${item.price} руб`}</figcaption>
          </figure>
          <a href="test" className="link product-list__product-link">{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  majorClass: PropTypes.string,
  bootstrapClass: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductList.defaultProps = {
  majorClass: null,
  bootstrapClass: null,
};
