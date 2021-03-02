import React from 'react';
import { Link } from 'react-router-dom';

import data from './data/data';

export default function NavigationCategories() {
  return (
    <nav className="navigation-categories">
      <ul className="row row-cols-1 row-cols-md-auto g-0 navigation-categories__list">
        {data.map((category) => (
          <li key={category.type} className="navigation-categories__item">
            <Link to={category.href} className="link navigation-categories__link">{category.type.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
