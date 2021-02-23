import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header';

const root = document.getElementById('root');

function Root() {
  return (
    <Header />
  );
}

ReactDOM.render(<Root />, root);
