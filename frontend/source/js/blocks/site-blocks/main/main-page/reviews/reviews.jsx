import React from 'react';

import { Section, Item, UserPhotoContainer, UserName, UserReviewText } from './components';

import ContainerHeadline from '../../../../universal/blocks/headline-container/headline-container';

import mock from './mock/mock';

import '../../../../../../img/review-user-placeholder.png';

export default function Reviews() {
  return (
    <Section>
      <ContainerHeadline headlineText="Отзывы" />
      <ul className="row row-cols-1 row-cols-md-3 g-0">
        {mock.map((review) => (
          <Item key={review.id}>
            <UserPhotoContainer>
              <img src={review.imgSrc} alt="Фото покупателя" />
            </UserPhotoContainer>
            <UserName>{review.name}</UserName>
            <UserReviewText>{review.reviewText}</UserReviewText>
          </Item>
        ))}
      </ul>
    </Section>
  );
}
