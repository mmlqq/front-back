import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import '../sass/style.scss';

import ScrollToTop from './blocks/utils/scroll-to-top';

import GlobalStyles from './blocks/styles-data/global-styles';

import Header from './blocks/main-blocks/header/header';
import Main from './blocks/main-blocks/main/main';
import Footer from './blocks/main-blocks/footer/footer';
import ErrorBoundary from './blocks/utils/error-boundary/error-boundary';

const root = document.getElementById('root');

function Root() {
  return (
    <HashRouter>
      <ScrollToTop />
      <GlobalStyles />
      <ErrorBoundary>
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    </HashRouter>
  );
}

ReactDOM.render(<Root />, root);
