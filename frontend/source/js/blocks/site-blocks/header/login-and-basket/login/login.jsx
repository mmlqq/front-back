import React from 'react';

import LoginIcon from '../../../../svg/login-icon/login-icon';

export default function Login() {
  return (
    <a href="/login" title="Авторизация" className="login">
      <LoginIcon />
    </a>
  );
}
