import React from 'react';
import PropTypes from 'prop-types';

import LinkTo from '../../../../universal/buttons/link-to/link-to';

import { Nav, List, Item } from './navigation-style';

import data from './data/data';

export default function Navigation({ openStatus, navigationRef }) {
  return (
    <Nav ref={navigationRef} className="col" active={openStatus}>
      <List className="row row-cols-sm-1 row-cols-md-auto g-0">
        {data.map((item) => (
          <Item key={item.type}>
            <LinkTo exact to={item.href} activeClassName="current-page">{item.type}</LinkTo>
          </Item>
        ))}
      </List>
    </Nav>
  );
}

Navigation.propTypes = {
  openStatus: PropTypes.bool.isRequired,
};
