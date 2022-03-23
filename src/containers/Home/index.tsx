import { Footer, Header } from 'components'
import React from 'react'

import { Container, Content } from './styles'

const Home = () => {
  return (
    <Container>
      <Header />

      <Content>hola home</Content>
      <Footer />
    </Container>
  )
}

export default Home
