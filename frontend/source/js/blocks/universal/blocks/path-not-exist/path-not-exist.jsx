import React from 'react';
import { Link } from 'react-router-dom';

export default function PathNotExist() {
  return (
    <section className="path-not-exist">
      <h2 className="visually-hidden">Пути не существует</h2>
      <p className="path-not-exist__warning">Такого пути нет!</p>
      <Link to="/#" className="path-not-exist__to-main-page" autofocus>На главную страницу</Link>
    </section>
  );
}
