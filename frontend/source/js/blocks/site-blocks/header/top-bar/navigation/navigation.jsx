import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import data from './data/data';

export default function Navigation({ openStatus, navigationRef }) {
  return (
    <nav ref={navigationRef} className={classNames('col navigation', openStatus && 'navigation--open')}>
      <ul className="row row-cols-sm-1 row-cols-md-auto g-0 navigation__list">
        {data.map((item) => (
          <li key={item.type} className="navigation__item">
            <NavLink exact to={item.href} className="navigation__link" activeClassName="current-link">{item.type}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  openStatus: PropTypes.bool.isRequired,
};
