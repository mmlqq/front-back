import React from 'react';

import HeadlineContainer from '../../../../universal/blocks/headline-container/headline-container';

export default function Contacts() {
  return (
    <section className="contacts">
      <HeadlineContainer headlineText="Контакты" />
      <ul className="contacts__list">
        <li className="contacts__item">
          Адрес: <span>г.Москва, Троицкая улица</span>
        </li>
        <li className="contacts__item">
          Телефон: <a href="tel:84991234567" className="contacts__link">8 (499) 123 45 67</a>
        </li>
        <li className="contacts__item">
          E-mail: <a href="mailto: testmail@mail.ru" className="contacts__link">testmail@mail.ru</a>
        </li>
      </ul>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d771.25812181914!2d37.61699781622232!3d55.752097736171585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1614951382198!5m2!1sru!2sru" width="600" height="450" style={{ border: 0 }} title="Наше месторасположение" allowFullScreen="" loading="lazy" />
    </section>
  );
}
