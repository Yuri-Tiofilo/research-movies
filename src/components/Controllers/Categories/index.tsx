import { Genres } from 'common/interfaces/details'
import React from 'react'

import { Container, Title, Content } from './styles'

type Props = {
  data: Genres[]
}

const Categories = ({ data }: Props) => {
  return (
    <Container>
      {data &&
        data.map(genre => (
          <Content key={genre.id}>
            <Title>{genre.name}</Title>
          </Content>
        ))}
    </Container>
  )
}

export { Categories }
