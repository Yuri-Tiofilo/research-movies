import React, { createContext, useContext, useCallback, useState } from 'react'

import { DataAPIMovies } from 'common/interfaces/movies'
import {
  loadMoviesQuery,
  useMoviesQuery,
  searchInputMovies
} from 'common/query/useMovies'
import { queryClient } from 'common/services/query'

interface MoviesContextData {
  data: DataAPIMovies | undefined
  isFetching: boolean
  error: unknown
  loading: boolean
  currentPage: number

  handlePage(page: number, previous: boolean): void
  searchMovies(value: string, page: string): void
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

const MoviesProvider: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const { data, isFetching, error } = useMoviesQuery({
    page: String(currentPage)
  })

  async function fetchQuery(query: string) {
    await queryClient.fetchQuery<DataAPIMovies>('movies', () =>
      loadMoviesQuery(String(query))
    )
  }

  const handlePage = useCallback(
    async (current, previous) => {
      setLoading(true)

      let currentQuery: string | null | number = null

      if (data) {
        if (previous) {
          if (currentPage < data.total_pages) {
            setCurrentPage(prevState => prevState + 1)
            currentQuery = current + 1
          }

          fetchQuery(String(currentQuery))
        } else {
          if (currentPage > 1) {
            setCurrentPage(prevState => prevState - 1)
            currentQuery = current - 1

            fetchQuery(String(currentQuery))
          }
        }
      }

      setLoading(false)
    },
    [data, currentPage]
  )

  const searchMovies = useCallback(async (value: string, page: string) => {
    setLoading(true)
    await queryClient.fetchQuery<DataAPIMovies>('movies', () =>
      searchInputMovies(value, page)
    )

    setLoading(false)
  }, [])

  return (
    <MoviesContext.Provider
      value={{
        data,
        isFetching,
        error,
        handlePage,
        loading,
        searchMovies,
        currentPage
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
function useMovies(): MoviesContextData {
  const context = useContext(MoviesContext)

  return context
}
export { MoviesProvider, useMovies }
