import React from 'react'

import Logo from 'assets/logo.svg'
import { useAuth } from 'common/hooks/auth'

import { FiLogOut } from 'react-icons/fi'

import { Container, Content, Avatar } from './styles'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" arial-label="Logo do site" />

        {!!user && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar arial-label="Avatar Usuário">
              {user.name.slice(0, 1)}
            </Avatar>

            <button
              style={{
                background: 'transparent',
                color: '#fff',
                marginLeft: 20,
                display: 'flex',
                alignItems: 'center'
              }}
              onClick={() => signOut()}
              arial-label="Sair deste usuário"
            >
              Trocar
              <FiLogOut style={{ marginLeft: 10 }} />
            </button>
          </div>
        )}
      </Content>
    </Container>
  )
}

export { Header }
