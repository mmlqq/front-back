import React from 'react';

import FooterComp from './footer-style';

import Authors from './authors/authors';

export default function Footer() {
  return (
    <FooterComp className="container">
      <Authors />
    </FooterComp>
  );
}
