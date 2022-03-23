import React from 'react'
import Logo from 'assets/logo.svg'
import Image from 'assets/image-welcome.png'

import { Container, Content } from './styles'
import { WelcomeForm } from 'components'

const Welcome: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo" width={250} height={120} />

      <Content>
        <WelcomeForm />

        <div style={{ width: '30%' }}>
          <img src={Image} alt="Logo" width={300} height={300} />
        </div>
      </Content>
    </Container>
  )
}

export default Welcome
