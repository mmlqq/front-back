import React from 'react';

import HeaderComp from './components';

import TopBar from './top-bar/top-bar';
import NavigationCategories from './navigation-categories/navigation-categories';
import SearchInput from '../../universal/blocks/search-input/search-input';

export default function Header() {
  return (
    <HeaderComp className="container">
      <TopBar />
      <NavigationCategories />
      <SearchInput />
    </HeaderComp>
  );
}
