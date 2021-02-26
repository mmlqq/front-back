import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header';
import Main from './blocks/site-blocks/main/main';

const root = document.getElementById('root');

function Root() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

ReactDOM.render(<Root />, root);
