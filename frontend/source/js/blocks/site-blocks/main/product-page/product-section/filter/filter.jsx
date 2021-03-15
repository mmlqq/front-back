import React from 'react';

import { Section, FilterSection, FilterName, OptionsContainer, OptionItem, Input, InputLabel, SubmitButton } from './components';

import HeadlineContainer from '../../../../../universal/blocks/headline-container/headline-container';

import SPACE from '../../../../../variables/variables';

import mock from './mock/mock';

import '../../../../../../../img/svg/plus.svg';
import '../../../../../../../img/svg/minus.svg';

export default function Filter() {
  // Переключение класса у legend тега

  function toggleFilterMenu(e) {
    if (e.target.tagName === 'LEGEND') {
      e.target.classList.toggle('active');
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
    <Section className="col-12 col-lg-2">
      <HeadlineContainer headlineText="Фильтры" />
      <form method="GET">
        {mock.map((section) => (
          <FilterSection key={section.name} onClick={toggleFilterMenu} onKeyUp={toggleFilterMenuByKeyPress}>
            <FilterName tabIndex="0" aria-label="Раскрыть список фильтра" role="button">{section.name}</FilterName>
            <OptionsContainer>
              <ul>
                {section.options.map((option) => (
                  <OptionItem key={option}>
                    <Input className="visually-hidden" type="checkbox" name={option} id={option} />
                    <InputLabel htmlFor={option}>{option}</InputLabel>
                  </OptionItem>
                ))}
              </ul>
            </OptionsContainer>
          </FilterSection>
        ))}
        <SubmitButton type="submit">Применить</SubmitButton>
      </form>
    </Section>
  );
}
