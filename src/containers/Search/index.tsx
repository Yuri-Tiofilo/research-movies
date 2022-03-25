import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { H1, Header, HomeList } from 'components'

import { Container } from './styles'
import { searchInputMovies } from 'common/query/useMovies'
import { queryClient } from 'common/services/query'
import { DataAPIMovies } from 'common/interfaces/movies'

const Search = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)

  const [data, setData] = useState<DataAPIMovies>({} as DataAPIMovies)

  async function loadSearch() {
    const response = await queryClient.fetchQuery<DataAPIMovies>(
      'movies-search',
      () => searchInputMovies(String(query.get('name')), '1')
    )

    setData(response)
  }

  useEffect(() => {
    loadSearch()
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Header />

      <H1>Resultados por: {query.get('name')}</H1>

      <HomeList data={data.results} />
    </Container>
  )
}

export default Search
