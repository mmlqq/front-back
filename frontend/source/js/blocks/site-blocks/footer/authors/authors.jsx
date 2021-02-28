/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import GithubIcon from '../../../svg/github-icon/github-icon';
import data from './data/data';

export default function Authors() {
  return (
    <section className="authors">
      <h2 className="visually-hidden">Участники создания учебного проекта</h2>
      <p className="authors__info">Сделан в качестве практики совместной работы frontend + backend.</p>
      <ul className="authors__list">
        {data.map((participant) => (
          <li key={participant.side} className="authors__item">
            <p className="authors__side">{participant.side}:</p>
            <a href={participant.githubLink} className="authors__link" target="_blank">
              <GithubIcon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
