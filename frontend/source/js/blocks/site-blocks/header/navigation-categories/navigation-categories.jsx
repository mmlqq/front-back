import React from 'react';
import { Link } from 'react-router-dom';

import data from './data/data';

export default function NavigationCategories() {
  return (
    <nav className="navigation-categories">
      <ul className="navigation-categories__list">
        {data.map((category) => (
          <li key={category.type} className="navigation-categories__item">
            <Link to={category.href} className="navigation-categories__link">{category.type.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
