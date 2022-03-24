import React from 'react'
import Logo from 'assets/logo.svg'

import { Container, Content } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" width={150} height={120} />
      </Content>
    </Container>
  )
}

export { Header }
