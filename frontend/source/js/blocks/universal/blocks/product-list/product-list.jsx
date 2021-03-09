import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import LoadingIcon from '../../../svg/loading-icon/loading-icon';

export default function ProductList({ majorClass, bootstrapClass, list }) {
  const [loading, setLoading] = useState(null);
  const [loadedData, setLoadedData] = useState(null);

  // Симуляция запроса

  useEffect(() => {
    setLoading(true);
    const timerID = setTimeout(() => {
      new Promise((resolve) => resolve(list)).then((data) => {
        setLoading((prevState) => !prevState);
        setLoadedData(data);
      });
    }, 1000);

    return () => clearTimeout(timerID);
  }, [list]);

  //

  return (
    loading || !loadedData
      ? <LoadingIcon />
      : (
        <ul className={classNames('product-list', majorClass, bootstrapClass)}>
          {loadedData.map((item) => (
            <li key={item.id} className="product-list__item">
              <figure className="product-list__product-img-container">
                <img src="assets/img/product-placeholder.png" alt="Товар" />
                <figcaption className="product-list__product-price">{`${item.price} руб`}</figcaption>
              </figure>
              <a href="test" className="link product-list__product-link">{item.name}</a>
            </li>
          ))}
        </ul>
      )
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
