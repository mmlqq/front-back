import React from 'react';

import GoogleMap from './google-map/google-map';
import Contacts from './contacts/contacts';
// import Address from './address/address';

export default function Footer() {
  return (
    <footer className="container footer">
      <GoogleMap />
      <Contacts />
    </footer>
  );
}
