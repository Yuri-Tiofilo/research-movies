import React from 'react'
import { useLocation } from 'react-router-dom'

import { H1, Header } from 'components'

import { Container } from './styles'

const Search = () => {
  const location = useLocation()

  const query = new URLSearchParams(location.search)

  return (
    <Container>
      <Header />

      <H1>Resultados por: {query.get('name')}</H1>
    </Container>
  )
}

export default Search
