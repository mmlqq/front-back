import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainComp from './main-style';

import Slider from '../../universal/blocks/slider/slider';
import Collections from './main-page/collections/collections';
import Reviews from './main-page/reviews/reviews';

import SubsectionLoading from '../../universal/blocks/subsection-loading/subsection-loading';
import ChangeDocTitle from '../../utils/change-doc-title';

const ProductSection = lazy(() => import('./product-page/product-section/product-section'));

const DeliveryAndPayment = lazy(() => import('./delivery-payment-page/delivery-and-payment/delivery-and-payment'));

const Contacts = lazy(() => import('./contacts-page/contacts/contacts'));

const AboutCompany = lazy(() => import('./company-page/about-company/about-company'));

const PathNotExist = lazy(() => import('../../universal/blocks/path-not-exist/path-not-exist'));

export default function Main() {
  return (
    <MainComp className="container">
      <Suspense fallback={<SubsectionLoading />}>
        <Switch>
          <Redirect exact from="/catalog" to="/" />
          <Route path="/catalog/:catalogType">
            <ChangeDocTitle title="Страница с товаром" />
            <ProductSection />
          </Route>
          <Route path="/delivery-and-payment">
            <ChangeDocTitle title="О доставке и оплате" />
            <DeliveryAndPayment />
          </Route>
          <Route path="/contacts">
            <ChangeDocTitle title="Как с нами связаться" />
            <Contacts />
          </Route>
          <Route path="/about-company">
            <ChangeDocTitle title="О нас" />
            <AboutCompany />
          </Route>
          <Route exact path="/">
            <ChangeDocTitle title="Магазин зимней атрибутики" />
            <Slider />
            <Collections />
            <Reviews />
          </Route>
          <Route>
            <ChangeDocTitle title="Путь не найден" />
            <PathNotExist />
          </Route>
        </Switch>
      </Suspense>
    </MainComp>
  );
}
