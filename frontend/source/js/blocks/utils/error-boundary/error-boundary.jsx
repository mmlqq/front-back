import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Text, Svg } from './error-boundary-style';

// Предохранитель для ленивой загрузки компонентов

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    document.title = 'Произошла ошибка!';
    return { hasError: true };
  }

  render() {
    return (
      this.state.hasError
        ? (
          <Container>
            <Svg />
            <Text>Произошла внезапная ошибка!</Text>
          </Container>
        )
        : this.props.children
    );
  }
}

//

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
