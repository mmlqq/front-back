import React from 'react';

import mock from './mock/mock';

import '../../../../../img/review-user-placeholder.png';

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__headline-container">
        <h2 className="headline reviews__headline">Отзывы</h2>
      </div>
      <ul className="row row-cols-1 row-cols-md-3 g-0 reviews__list">
        {mock.map((review) => (
          <li key={review.id} className="reviews__item">
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
