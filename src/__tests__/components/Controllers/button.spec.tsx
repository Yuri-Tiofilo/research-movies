import React from 'react'
import { Button } from 'components'
import { render } from '@testing-library/react'
import theme from 'common/styles/theme'
import { ThemeProvider } from 'styled-components'

describe('Button Component', () => {
  it('should be able to render an Button', () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { getByText } = render(<Button>Button</Button>, {
      wrapper
    })

    expect(getByText('Button')).toBeTruthy()
  })

  it('should be able to render an Button in loading', () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { getByText } = render(<Button loading={true}>Button</Button>, {
      wrapper
    })

    expect(getByText('Carregando...')).toBeTruthy()
  })
})
