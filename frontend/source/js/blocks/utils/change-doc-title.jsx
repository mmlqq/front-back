import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Изменение title документа при роутинге

export default function ChangeDocTitle({ title }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [pathname]);

  return null;
}

//

ChangeDocTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
