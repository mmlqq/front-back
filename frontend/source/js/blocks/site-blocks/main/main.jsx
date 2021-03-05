import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Slider from '../../universal/blocks/slider/slider';
import Collections from './collections/collections';
import Reviews from './reviews/reviews';

import ProductSection from './product-section/product-section';

export default function Main() {
  return (
    <main className="container main">
      <Switch>
        <Route path="/catalog/:catalogType">
          <ProductSection />
        </Route>
        <Route exact path="/">
          <Slider />
          <Collections />
          <Reviews />
        </Route>
      </Switch>
    </main>
  );
}
