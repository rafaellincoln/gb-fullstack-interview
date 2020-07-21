import React from 'react';
import { Spinner } from '@shopify/polaris';
import { Container } from './Styled';

const Loading = () => {
  return (
    <Container>
      <Spinner accessibilityLabel="Spinner" size="large" color="inkLightest" />
    </Container>
  )
};

export default Loading;