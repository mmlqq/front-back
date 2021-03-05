import React from 'react';

import mock from './mock/mock';

export default function Sort() {
  return (
    <form method="GET" className="sort">
      <select className="sort__select" name="sort-type" id="sort-type" title="Меню сортировки">
        {mock.map((option) => (
          <option className="sort__option" key={option} value={option}>{option}</option>
        ))}
      </select>
    </form>
  );
}
