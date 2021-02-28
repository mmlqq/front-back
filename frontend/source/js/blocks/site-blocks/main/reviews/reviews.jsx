import React from 'react';

import mock from './mock/mock';

import '../../../../../img/review-user-placeholder.png';

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews__headline">Отзывы</h2>
      <ul className="reviews__list">
        {mock.map((review) => (
          <li className="reviews__item">
            <figure className="reviews__user-photo-container">
              <img src={review.imgSrc} alt="Фото покупателя" />
            </figure>
            <p className="reviews__user-name">{review.name}</p>
            <p className="reviews__user-review-text">{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
