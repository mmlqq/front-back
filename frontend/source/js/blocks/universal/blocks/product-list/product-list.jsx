import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { List, Item, ImageContainer, Price, LinkToProduct } from './components';

import LoadingIcon from '../../../svg/loading-icon/loading-icon';

export default function ProductList({ bootstrapClass, list }) {
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
        <List className={bootstrapClass}>
          {loadedData.map((item) => (
            <Item key={item.id}>
              <ImageContainer>
                <img src="assets/img/product-placeholder.png" alt="Товар" />
                <Price>{`${item.price} руб`}</Price>
              </ImageContainer>
              <LinkToProduct href="test">{item.name}</LinkToProduct>
            </Item>
          ))}
        </List>
      )
  );
}

ProductList.propTypes = {
  bootstrapClass: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductList.defaultProps = {
  bootstrapClass: null,
};
