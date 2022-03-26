import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, wait } from '@testing-library/react'
import { Input } from '../../components/Controllers/Input'
import theme from 'common/styles/theme'

describe('Input Component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input
          name="email"
          placeholder="E-mail"
          onBlur={() => {
            return false
          }}
        />
      </ThemeProvider>
    )

    expect(getByPlaceholderText('E-mail')).toBeTruthy()
  })

  it('should render highlight in input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        placeholder="E-mail"
        onBlur={() => {
          return false
        }}
      />
    )

    const inputElement = getByPlaceholderText('E-mail')
    const containerElement = getByTestId('input-container')

    fireEvent.focus(inputElement)

    await wait(() => {
      expect(containerElement).toHaveStyle('border-color: #E80202')
      expect(containerElement).toHaveStyle('color: #fff')
    })

    fireEvent.blur(inputElement)

    await wait(() => {
      expect(containerElement).not.toHaveStyle('border-color: #0000;')
      expect(containerElement).not.toHaveStyle('color: #ff9900;')
    })
  })

  it('not should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input
        name="email"
        placeholder="E-mail"
        onBlur={() => {
          return false
        }}
      />
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
