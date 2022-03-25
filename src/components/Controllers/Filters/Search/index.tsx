import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { Input } from 'components'

import { Container, Form } from './styles'
import { useLocation } from 'react-router-dom'

type Props = {
  totalResults: number | undefined
}

const Search = ({ totalResults }: Props) => {
  const [searchState, setSearchState] = useState('')
  const location = useLocation()

  function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (location.pathname === '/home' || location.pathname === '/search') {
      if (searchState !== '') {
        window.location.href = `/search?name=${searchState}`
      }
    }
  }

  return (
    <Container>
      <div>
        <span>
          Total encontrado: <b>{totalResults}</b> filmes
        </span>
      </div>
      <Form onSubmit={e => search(e)}>
        <Input
          aria-label="Pesquisar por filme"
          name="search"
          icon={FiSearch}
          value={searchState}
          placeholder="Pesquisar por filme..."
          onChange={e => setSearchState(e.target.value)}
        />
      </Form>
    </Container>
  )
}

export { Search }
