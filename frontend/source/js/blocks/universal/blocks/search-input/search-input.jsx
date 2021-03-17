import React, { useState } from 'react';

import { Section, Form, Input } from './search-input-style';

export default function SearchInput() {
  const [searchText, setSearchText] = useState('');

  function changeHandler(e) {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  return (
    <Section>
      <h2 className="visually-hidden">Поиск по сайту</h2>
      <Form method="GET">
        <Input type="text" onChange={changeHandler} placeholder="Сноуборд" value={searchText} />
      </Form>
    </Section>
  );
}
