import React from 'react';

import { Section, WarningText, LinkTo } from './components';

export default function PathNotExist() {
  return (
    <Section>
      <h2 className="visually-hidden">Пути не существует</h2>
      <WarningText>Такого пути нет!</WarningText>
      <LinkTo to="/">На главную страницу</LinkTo>
    </Section>
  );
}
