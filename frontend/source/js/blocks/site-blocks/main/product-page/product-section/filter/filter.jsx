/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import SPACE from '../../../../../variables/variables';

import mock from './mock/mock';

import '../../../../../../../img/svg/plus.svg';
import '../../../../../../../img/svg/minus.svg';
import HeadlineContainer from '../../../../../universal/blocks/headline-container/headline-container';

export default function Filter() {
  // Переключение класса у legend тега

  function toggleFilterMenu(e) {
    if (e.target.tagName === 'LEGEND') {
      e.target.classList.toggle('filter__filter-name--active');
    }
  }

  //

  // Слушатель на пробел

  function toggleFilterMenuByKeyPress(e) {
    if (e.code === SPACE) {
      toggleFilterMenu(e);
    }
  }

  //

  return (
    <section className="col-12 col-lg-2 filter">
      <HeadlineContainer majorClass="filter" headlineText="Фильтры" />
      <form method="GET" className="filter__form">
        {mock.map((section) => (
          <fieldset key={section.name} className="filter__filter-section" onClick={toggleFilterMenu} onKeyUp={toggleFilterMenuByKeyPress}>
            <legend className="filter__filter-name" tabIndex="0" aria-label="Раскрыть список фильтра" role="button">{section.name}</legend>
            <div className="filter__options-container">
              <ul className="filter__options-list">
                {section.options.map((option) => (
                  <li key={option} className="filter__option-item">
                    <input type="checkbox" name={option} className="visually-hidden filter__option-input" id={option} />
                    <label className="filter__option-label" htmlFor={option}>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>
        ))}
        <button className="filter__submit-filter" type="submit">Применить</button>
      </form>
    </section>
  );
}
