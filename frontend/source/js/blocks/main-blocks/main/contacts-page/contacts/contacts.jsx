import React from 'react';

import { Section, List, Item, Link } from './contacts-style';

import HeadlineContainer from '../../../../universal/blocks/headline-container/headline-container';

export default function Contacts() {
  return (
    <Section>
      <HeadlineContainer headlineText="Контакты" />
      <List>
        <Item>
          Адрес: <span>г.Москва, Троицкая улица</span>
        </Item>
        <Item>
          Телефон: <Link href="tel:84991234567" title="Наш телефон">8 (499) 123 45 67</Link>
        </Item>
        <Item>
          E-mail: <Link href="mailto: testmail@mail.ru" title="А это наш email">testmail@mail.ru</Link>
        </Item>
      </List>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d771.25812181914!2d37.61699781622232!3d55.752097736171585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1614951382198!5m2!1sru!2sru" width="600" height="450" style={{ border: 0 }} title="Наше месторасположение" allowFullScreen="" loading="lazy" />
    </Section>
  );
}
