import React from 'react';

import Navigation from './navigation/navigation';
import SiteSearch from './site-search/site-search';

export default function NavigationPanel() {
  return (
    <section className="navigation-panel">
      <h2 className="visually-hidden">Навигационный раздел</h2>
      <Navigation />
      <SiteSearch />
    </section>
  );
}
