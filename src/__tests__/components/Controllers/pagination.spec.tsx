import React from 'react'
import { Pagination } from 'components'
import { fireEvent, render, wait } from '@testing-library/react'
import { queryClient } from 'common/services/query'
import { QueryClientProvider } from 'react-query'
import AppProvider from 'common/hooks'
import theme from 'common/styles/theme'
import { ThemeProvider } from 'styled-components'

describe('Pagination Component', () => {
  it('should be able to render an Pagination', () => {
    const wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    )

    function handleMoreResults(prev: boolean) {
      return prev
    }

    const { getByText } = render(
      <Pagination currentPage={1} handleMoreResults={handleMoreResults} />,
      { wrapper }
    )

    expect(getByText('Próxima Página')).toBeTruthy()
    expect(getByText('Voltar Página')).toBeTruthy()
  })

  it('should be able to render an Pagination click button next', async () => {
    const wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    )

    function handleMoreResults(prev: boolean) {
      return prev
    }
    const { getByText } = render(
      <Pagination currentPage={1} handleMoreResults={handleMoreResults} />,
      { wrapper }
    )

    const buttonElement = getByText('Próxima Página')

    fireEvent.click(buttonElement)

    await wait(() => {
      expect(() => handleMoreResults(true)).not.toBeFalsy()
    })
  })

  it('should be able to render an Pagination click button previous', async () => {
    const wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    )

    function handleMoreResults(prev: boolean) {
      return prev
    }
    const { getByText } = render(
      <Pagination currentPage={2} handleMoreResults={handleMoreResults} />,
      { wrapper }
    )

    const buttonElement = getByText('Voltar Página')

    fireEvent.click(buttonElement)

    wait(() => {
      expect(() => handleMoreResults(false)).toEqual(false)
    })
  })
})
