import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Slider from '../../universal/blocks/slider/slider';

import Collections from './main-page/collections/collections';
import Reviews from './main-page/reviews/reviews';

import ProductSection from './product-page/product-section/product-section';

import DeliveryAndPayment from './delivery-payment-page/delivery-and-payment/delivery-and-payment';

import Contacts from './contacts-page/contacts/contacts';
import AboutCompany from './company-page/about-company/about-company';

export default function Main() {
  return (
    <main className="container main">
      <Switch>
        <Route path="/catalog/:catalogType">
          <ProductSection />
        </Route>
        <Route path="/delivery-and-payment">
          <DeliveryAndPayment />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/about-company">
          <AboutCompany />
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
