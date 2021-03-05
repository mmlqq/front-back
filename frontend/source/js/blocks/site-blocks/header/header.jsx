import React from 'react';

import TopBar from './top-bar/top-bar';
import NavigationCategories from './navigation-categories/navigation-categories';
import SearchInput from '../../universal/blocks/search-input/search-input';

export default function Header() {
  return (
    <header className="container header">
      <TopBar />
      <NavigationCategories />
      <SearchInput />
    </header>
  );
}
