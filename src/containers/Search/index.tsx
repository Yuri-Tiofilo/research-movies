import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import {
  H1,
  Header,
  HomeList,
  Pagination,
  Search as SearchComponent,
  Seo
} from 'components'

import { Container, Content } from './styles'
import { searchInputMovies } from 'common/query/useMovies'
import { queryClient } from 'common/services/query'
import { DataAPIMovies } from 'common/interfaces/movies'

type Params = {
  movie: string
}

const Search = () => {
  const { movie } = useParams<Params>()
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState<DataAPIMovies>({} as DataAPIMovies)

  async function loadSearch(page: number) {
    setLoading(true)
    const response = await queryClient.fetchQuery<DataAPIMovies>(
      'movies-search',
      () => searchInputMovies(String(movie), String(page))
    )

    setData(response)
    setLoading(false)
  }

  const handlePage = useCallback(
    async (current: number, previous: boolean) => {
      setLoading(true)

      let currentQuery = 1

      if (data) {
        if (previous) {
          if (currentPage < data.total_pages) {
            setCurrentPage(prevState => prevState + 1)
            currentQuery = current + 1
          }

          loadSearch(currentQuery)
        } else {
          if (currentPage > 1) {
            setCurrentPage(prevState => prevState - 1)
            currentQuery = current - 1

            loadSearch(currentQuery)
          }
        }
      }

      setLoading(false)
    },
    // eslint-disable-next-line
    [data, currentPage]
  )

  useEffect(() => {
    loadSearch(1)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Seo title={String(movie)} />
      <Container>
        <Header />

        {loading ? (
          <div>Loading..</div>
        ) : (
          <Content>
            <SearchComponent totalResults={data && data.total_results} />
            <H1>Resultados por: {movie}</H1>

            <HomeList data={data && data.results} />

            {data && data.total_pages !== 1 && (
              <Pagination
                handleMoreResults={previous =>
                  handlePage(currentPage, previous)
                }
                currentPage={currentPage}
              />
            )}
          </Content>
        )}
      </Container>
    </>
  )
}

export default Search
