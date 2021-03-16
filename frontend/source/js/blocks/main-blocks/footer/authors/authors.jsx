import React from 'react';

import { Section, Info, List, Li, Side, LinkToProfile } from './authors-style';

import GithubIcon from '../../../svg/github-icon/github-icon';

import data from './data/data';

export default function Authors() {
  return (
    <Section className="row row-cols-sm-1 row-cols-lg-auto g-0">
      <h2 className="visually-hidden">Участники создания учебного проекта</h2>
      <Info>Сделан в качестве практики совместной работы frontend&nbsp;+&nbsp;backend.</Info>
      <List className="row row-cols-auto g-0">
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
