import React from 'react';

import { Link } from 'react-router-dom';

import data from './data/data';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {data.map((item) => (
          <li key={item.type} className="navigation__item">
            <Link to={item.href} className="link navigation__link">{item.type}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
