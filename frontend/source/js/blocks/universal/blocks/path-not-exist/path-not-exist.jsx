import React, { useEffect, useRef } from 'react';

import { Section, WarningText, LinkTo } from './path-not-exist-style';

export default function PathNotExist() {
  const linkRef = useRef();

  // Фокусировка пользователя на кнопке

  useEffect(() => {
    const timerID = setTimeout(() => beFocused(), 500);

    return () => {
      clearTimeout(timerID);
    };
  }, []);

  //

  // Установка принудительного фокуса

  function beFocused() {
    linkRef.current.focus();
  }

  //

  return (
    <Section>
      <h2 className="visually-hidden">Пути не существует</h2>
      <WarningText>Такого пути нет!</WarningText>
      <LinkTo ref={linkRef} to="/" onBlur={beFocused}>На главную страницу</LinkTo>
    </Section>
  );
}
