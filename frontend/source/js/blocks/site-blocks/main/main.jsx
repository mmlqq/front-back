import React from 'react';
import Categories from './categories/categories';

import NavigationPanel from './navigation-panel/navigation-panel';

export default function Main() {
  return (
    <main className="container main">
      <NavigationPanel />
      {/* <Categories /> */}
    </main>
  );
}
