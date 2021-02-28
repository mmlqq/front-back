import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header';
import Main from './blocks/site-blocks/main/main';
import Footer from './blocks/site-blocks/footer/footer';

const root = document.getElementById('root');

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, root);
