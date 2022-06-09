import React from 'react';
import { useColorScheme } from 'react-native'

import { Container, Name } from './styles';

const Home = () => {
    const deviceTheme = useColorScheme();
  return (
      <Container>
          <Name>{`${deviceTheme.toUpperCase()} MODE`}</Name>
      </Container>
  )
}

export default Home;