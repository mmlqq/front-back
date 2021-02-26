import React from 'react';

import data from './data/data';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {data.map((link) => (
          <li className="navigation__item">
            <a href={link.href} className="navigation__link">{link.type}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
