import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { WelcomeForm } from 'components'

const mockedHistoryPush = jest.fn()
const mockedSignIn = jest.fn()
const mockedAddToToast = jest.fn()

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  }
})

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  }
})

jest.mock('common/hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn
    })
  }
})
describe('SignIn Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear()
  })
  it('should to be able sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<WelcomeForm />)

    const nameField = getByPlaceholderText('Nome Completo')
    const buttonElement = getByText('Entrar')

    fireEvent.change(nameField, { target: { value: 'Yuri Silva' } })

    fireEvent.click(buttonElement)

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard')
    })
  })

  // it('should not be able sign in with invalid credentials', async () => {
  //   const { getByPlaceholderText, getByText } = render(<WelcomeForm />)

  //   const emailField = getByPlaceholderText('E-mail')
  //   const passwordField = getByPlaceholderText('Senha')
  //   const buttonElement = getByText('Entrar')

  //   fireEvent.change(emailField, { target: { value: 'not-valid-email' } })
  //   fireEvent.change(passwordField, { target: { value: '123456' } })

  //   fireEvent.click(buttonElement)

  //   await wait(() => {
  //     expect(mockedHistoryPush).not.toHaveBeenCalled()
  //   })
  // })
  // it('should display an error if login fails', async () => {
  //   mockedSignIn.mockImplementation(() => {
  //     throw new Error()
  //   })

  //   const { getByPlaceholderText, getByText } = render(<WelcomeForm />)

  //   const emailField = getByPlaceholderText('E-mail')
  //   const passwordField = getByPlaceholderText('Senha')
  //   const buttonElement = getByText('Entrar')

  //   fireEvent.change(emailField, { target: { value: 'yuri@incca.com.br' } })
  //   fireEvent.change(passwordField, { target: { value: '123456' } })

  //   fireEvent.click(buttonElement)

  //   await wait(() => {
  //     expect(mockedAddToToast).toHaveBeenCalledWith(
  //       expect.objectContaining({
  //         type: 'error'
  //       })
  //     )
  //   })
  // })
})
