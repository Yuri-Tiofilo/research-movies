import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Input } from 'components'
import { useAuth } from 'common/hooks/auth'

import { Container, ContentTitle, Form } from './styles'

const WelcomeForm: React.FC = () => {
  const { signIn } = useAuth()
  const [user, setUser] = useState('')

  function handleDashboard(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (user !== '') {
      try {
        signIn({
          name: user
        })
        toast.success(
          `Bem vindo ${user}! Aproveite bem o nosso site. Obrigado!!`
        )
      } catch (error) {
        toast.error('Tivemos um problema, tente novamente mais tarde.')
      }
    } else {
      toast.error('Preencha seu nome, depois prossiga no sistema.')
    }
  }

  return (
    <Container>
      <ContentTitle>
        <span role="img" aria-label="Check">
          👏 Hey, welcome
        </span>
        <h1>
          New online<span> Movie</span> finder.
        </h1>
        <p>
          Enter your name so that we can identify you. And so you can use our
          services.
        </p>
      </ContentTitle>

      <Form onSubmit={e => handleDashboard(e)}>
        <Input
          placeholder="Nome Completo"
          onChange={e => setUser(e.target.value)}
          value={user}
        />

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  )
}

export { WelcomeForm }
