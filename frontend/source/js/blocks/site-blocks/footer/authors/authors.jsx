import React from 'react';

import { Section, Info, List, Li, Side, LinkToProfile } from './components';

import GithubIcon from '../../../svg/github-icon/github-icon';

import data from './data/data';

export default function Authors() {
  return (
    <Section>
      <h2 className="visually-hidden">Участники создания учебного проекта</h2>
      <Info>Сделан в качестве практики совместной работы frontend&nbsp;+&nbsp;backend.</Info>
      <List>
        {data.map((participant) => (
          <Li key={participant.side}>
            <Side>{participant.side}:</Side>
            <LinkToProfile href={participant.githubLink} target="_blank">
              <GithubIcon />
            </LinkToProfile>
          </Li>
        ))}
      </List>
    </Section>
  );
}
