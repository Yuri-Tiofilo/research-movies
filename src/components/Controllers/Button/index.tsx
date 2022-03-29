import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}
const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container data-testid="button-container" type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
)

export { Button }
