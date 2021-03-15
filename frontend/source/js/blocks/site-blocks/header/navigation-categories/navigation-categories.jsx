import React from 'react';

import { Nav, List, Item } from './components';
import LinkTo from '../../../universal/buttons/link-to/components';

import data from './data/data';

export default function NavigationCategories() {
  return (
    <Nav>
      <List className="row row-cols-1 row-cols-md-auto g-0">
        {data.map((category) => (
          <Item key={category.type}>
            <LinkTo to={category.href} activeClassName="current-page">{category.type.toUpperCase()}</LinkTo>
          </Item>
        ))}
      </List>
    </Nav>
  );
}
