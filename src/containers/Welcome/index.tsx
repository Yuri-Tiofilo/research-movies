import React from 'react'
import Image from 'assets/image-welcome.png'

import { Container, Content } from './styles'
import { WelcomeForm, Header } from 'components'

const Welcome: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <WelcomeForm />

          <div style={{ width: '40%' }}>
            <img src={Image} alt="Logo" width={500} height={500} />
          </div>
        </Content>
      </Container>
    </>
  )
}

export default Welcome
