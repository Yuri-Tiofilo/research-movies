import React from 'react'
import { QueryClientProvider } from 'react-query'
import { Header } from 'components'
import { fireEvent, render, wait } from '@testing-library/react'
import theme from 'common/styles/theme'
import { ThemeProvider } from 'styled-components'
import AppProvider from 'common/hooks'
import { queryClient } from 'common/services/query'
import { renderHook } from '@testing-library/react-hooks'
import { AuthProvider, useAuth } from 'common/hooks/auth'

const mockedHistoryPush = jest.fn()
const mockedSignIn = jest.fn()
const mockedAddToToast = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  }
})

describe('Header Component', () => {
  it('should be able to render an Header', () => {
    const wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    )
    const { getByAltText } = render(<Header />, {
      wrapper
    })

    expect(getByAltText('Logo')).toBeTruthy()
  })

  it('should be able to render an Header with user exist', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case 'MoviesSearch:user':
          return JSON.stringify({
            name: 'Yuri Silva'
          })
        default:
          return null
      }
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    const wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    )
    const { getByText } = render(<Header />, {
      wrapper
    })

    expect(getByText('Y')).toBeTruthy()
    expect(result.current.user.name).toEqual('Yuri Silva')
  })

  it('should be able to render an Header with function sign-out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case 'MoviesSearch:user':
          return JSON.stringify({
            name: 'Yuri Silva'
          })
        default:
          return null
      }
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    const wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    )
    const { getByText } = render(<Header />, {
      wrapper
    })

    const buttonElement = getByText('Trocar')
    fireEvent.click(buttonElement)

    await wait(() => {
      expect(() => result.current.signOut())
    })
  })
})
