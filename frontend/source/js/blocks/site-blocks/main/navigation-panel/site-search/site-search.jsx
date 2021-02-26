import React from 'react';

import '../../../../../../img/svg/loupe.svg';

export default function SiteSearch() {
  return (
    <section className="site-search">
      <h2 className="visually-hidden">Поиск товаров</h2>
      <input type="text" className="site-search__input-search" pattern="^[А-Яа-яЁё\s]+$" placeholder="Протеин" title="Поиск товаров" />
    </section>
  );
}
