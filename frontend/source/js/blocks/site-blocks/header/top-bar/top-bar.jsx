import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';

import HamburgerButton from '../../../universal/buttons/hamburger-button/hamburger-button';
import Navigation from './navigation/navigation';
import Basket from './basket/basket';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef();

  // Анимация при нажатии на гамбургерное меню.

  useEffect(() => {
    if (isOpen) {
      $(navigationRef.current).animate({ top: '100%' }, 500);
    }
  }, [isOpen]);

  //

  // При закрытии меню

  function closeHamburger() {
    $(navigationRef.current).animate({ top: '-1000%' }, 500, () => setIsOpen((prevState) => !prevState));
  }

  //

  // Обработчик на гамбургерное меню.
  // isOpen === true - закрытие с анимацией с последующим изменением стейта через callback
  // Или изменение стейта с дальнейшей анимацией.

  function hamburgerHandler(e) {
    e.preventDefault();
    if (isOpen) {
      closeHamburger();
    } else {
      setIsOpen((prevState) => !prevState);
    }
  }

  //

  return (
    <section className="row g-0 top-bar">
      <h2 className="visually-hidden">Навигационная панель</h2>
      <HamburgerButton handler={hamburgerHandler} />
      <Navigation openStatus={isOpen} navigationRef={navigationRef} />
      <Basket />
    </section>
  );
}
