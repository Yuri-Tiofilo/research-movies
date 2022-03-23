import React, { memo } from 'react'

import { Container } from './styles'
import Logo from 'assets/logo.svg'

const Loading = () => (
  <Container>
    <img src={Logo} alt="Logo Aplication" />
    <h1>Loading...</h1>
  </Container>
)

export default memo(Loading)
