import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, wait } from '@testing-library/react'
import { Input } from 'components/Controllers/Input'

import { FiSearch } from 'react-icons/fi'
import theme from 'common/styles/theme'

describe('Input Component', () => {
  it('should be able to render an input', () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { getByPlaceholderText } = render(
      <Input
        name="email"
        placeholder="E-mail"
        onBlur={() => {
          return false
        }}
      />,
      {
        wrapper
      }
    )

    expect(getByPlaceholderText('E-mail')).toBeTruthy()
  })

  it('should render highlight in input focus', async () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        placeholder="E-mail"
        onBlur={() => {
          return false
        }}
        icon={FiSearch}
      />,
      {
        wrapper
      }
    )

    const inputElement = getByPlaceholderText('E-mail')
    const containerElement = getByTestId('input-container')

    fireEvent.focus(inputElement)

    await wait(() => {
      expect(containerElement).toHaveStyle('border-color: #E80202')
      expect(containerElement).not.toHaveStyle('color: #fff')
    })

    fireEvent.blur(inputElement)
    fireEvent.blur(containerElement)

    await wait(() => {
      expect(containerElement).toHaveStyle('color: rgb(232, 2, 2)')
      expect(inputElement).toHaveStyle('color: #F3F3F3')
    })
  })

  it('not should keep input border highlight when input filled', async () => {
    const wrapper: React.FC = ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
        onBlur={() => {
          return false
        }}
      />,
      {
        wrapper
      }
    )

    const inputElement = getByPlaceholderText('E-mail')
    const containerElement = getByTestId('input-container')

    fireEvent.change(inputElement, {
      target: { value: 'yuri@quero2pay.com.br' }
    })

    await wait(() => {
      expect(containerElement).not.toHaveStyle('color: rgb(96, 99, 96);')
    })
  })
})
