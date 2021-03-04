import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import '../sass/style.scss';

import ScrollToTop from './blocks/utils/scroll-to-top';

import Header from './blocks/site-blocks/header/header';
import Main from './blocks/site-blocks/main/main';
import Footer from './blocks/site-blocks/footer/footer';


const root = document.getElementById('root');

function Root() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </HashRouter>
  );
}

ReactDOM.render(<Root />, root);
