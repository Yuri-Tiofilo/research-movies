import { defaultUrlImage } from 'common/constants'
import { Results } from 'common/interfaces/details'
import { getDetails } from 'common/query/useMovies'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { Container, Content } from './styles'

type Params = {
  id: string
}

const Details: React.FC = () => {
  const { id } = useParams<Params>()

  const { data, isFetching } = useQuery<Results | undefined>(
    'movie-details',
    () => getDetails(Number(id))
  )

  console.log(data)
  return (
    <>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <Container
          pathImageBackground={
            data && defaultUrlImage.default + data.backdrop_path
          }
        >
          {data && (
            <Content>
              <img
                src={defaultUrlImage.default + data.poster_path}
                alt="Altzera"
              />
            </Content>
          )}
          Helo details
        </Container>
      )}
    </>
  )
}

export default Details
