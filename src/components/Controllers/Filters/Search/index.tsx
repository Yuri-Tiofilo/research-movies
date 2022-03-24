import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Input } from 'components'

import { Container, Form } from './styles'

type Props = {
  totalResults: number | undefined
}

const Search: React.FC<Props> = ({ totalResults = 100 }) => {
  return (
    <Container>
      <div>
        <span>
          Total encontrado: <b>{totalResults}</b> filmes
        </span>
      </div>
      <Form>
        <Input icon={FiSearch} placeholder="Pesquisar por filme..." />
      </Form>
    </Container>
  )
}

export { Search }
