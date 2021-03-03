import React, { useState } from 'react';

import '../../../../../img/svg/loupe.svg';

export default function SearchInput() {
  const [searchText, setSearchText] = useState('');

  function changeHandler(e) {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  return (
    <section className="search-input">
      <h2 className="visually-hidden">Поиск по сайту</h2>
      <form method="GET" className="search-input__form">
        <input type="text" className="search-input__input" onChange={changeHandler} placeholder="Сноуборд" value={searchText} />
      </form>
    </section>
  );
}
