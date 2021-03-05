import React from 'react';
import { NavLink } from 'react-router-dom';

import data from './data/data';

export default function NavigationCategories() {
  return (
    <nav className="navigation-categories">
      <ul className="row row-cols-1 row-cols-md-auto g-0 navigation-categories__list">
        {data.map((category) => (
          <li key={category.type} className="navigation-categories__item">
            <NavLink to={category.href} className="navigation-categories__link" activeClassName="current-page">{category.type.toUpperCase()}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
