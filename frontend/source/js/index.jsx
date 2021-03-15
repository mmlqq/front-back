import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import '../sass/style.scss';

import ScrollToTop from './blocks/utils/scroll-to-top';

import GlobalStyle from './blocks/global-style';

import Header from './blocks/site-blocks/header/header';
import Main from './blocks/site-blocks/main/main';
import Footer from './blocks/site-blocks/footer/footer';
import PathNotExist from './blocks/universal/blocks/path-not-exist/path-not-exist';

const root = document.getElementById('root');

function Root() {
  return (
    <HashRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route>
          <PathNotExist />
        </Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<Root />, root);
