import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import { MoviesProvider, useMovies } from 'common/hooks/movies'

import { queryClient } from 'common/services/query'
import { QueryClientProvider } from 'react-query'
import { AuthProvider } from 'common/hooks/auth'

describe('Movies Hook', () => {
  it('should be able to fetch the movies', async () => {
    const Wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MoviesProvider>{children}</MoviesProvider>
        </AuthProvider>
      </QueryClientProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useMovies(), {
      wrapper: Wrapper
    })

    await waitForNextUpdate()

    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error).toBeNull()
    expect(result.current.data).not.toBeUndefined()
  })

  it('must be able to change the data from the pagination', async () => {
    const Wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MoviesProvider>{children}</MoviesProvider>
        </AuthProvider>
      </QueryClientProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useMovies(), {
      wrapper: Wrapper
    })

    await waitForNextUpdate()

    const current = 2
    const prev = true

    await act(() => result.current.handlePage(current, prev))

    await waitForNextUpdate()

    expect(result.current.currentPage).toEqual(2)
  })

  it('must be able to change the data from the pagination, currentPage > 1', async () => {
    const Wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MoviesProvider>{children}</MoviesProvider>
        </AuthProvider>
      </QueryClientProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useMovies(), {
      wrapper: Wrapper
    })

    await waitForNextUpdate()

    const current = 8
    const prev = false

    result.current.setCurrentPage(9)

    await act(() => result.current.handlePage(current, prev))

    await waitForNextUpdate()

    expect(result.current.currentPage).toEqual(8)
  })

  it('featch search query in API', async () => {
    const Wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MoviesProvider>{children}</MoviesProvider>
        </AuthProvider>
      </QueryClientProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useMovies(), {
      wrapper: Wrapper
    })

    await waitForNextUpdate()

    await act(() => result.current.searchMovies('hulk', String(1)))
  })
})
