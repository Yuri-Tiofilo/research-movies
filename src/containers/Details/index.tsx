import React from 'react'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import Stars from 'react-stars'
import { useTheme } from 'styled-components'
import { FiArrowLeft } from 'react-icons/fi'

import { defaultUrlImage } from 'common/constants'
import { Results } from 'common/interfaces/details'
import { getDetails } from 'common/query/useMovies'
import { countStars } from 'common/utils'
import { Categories, Footer, H1 } from 'components'

import { Container, Content, Box, Description } from './styles'

type Params = {
  id: string
}

const Details: React.FC = () => {
  const { id } = useParams<Params>()
  const { COLORS } = useTheme()

  const { data, isFetching } = useQuery<Results | undefined>(
    'movie-details',
    () => getDetails(Number(id))
  )

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
              <Box>
                <Link
                  style={{
                    color: COLORS.PRIMARY,
                    paddingTop: 20,
                    display: 'flex'
                  }}
                  to="/home"
                >
                  <FiArrowLeft style={{ marginRight: 10 }} /> Voltar para a home
                </Link>
                <H1 style={{ fontSize: '40px' }}>{data.title}</H1>
                {data.genres && <Categories data={data.genres} />}

                {data.overview && <Description>{data.overview}</Description>}

                {data.runtime && (
                  <div style={{ marginTop: 20 }}>
                    <strong>Tempo de duração: </strong>
                    <span>{data.runtime} minutos</span>
                  </div>
                )}
                {data.release_date && (
                  <div style={{ marginTop: 20 }}>
                    <strong>Lançamento: </strong>
                    <span>
                      {format(new Date(data.release_date), 'dd/MM/yyyy')}
                    </span>
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 10
                  }}
                >
                  <strong style={{ marginTop: 10, marginRight: 5 }}>
                    Classificação:{' '}
                  </strong>
                  <Stars value={countStars(data.vote_average)} size={30} />
                </div>
              </Box>

              <img
                src={defaultUrlImage.default + data.poster_path}
                aria-label="Image Catalogo Filme Novo"
                alt="Alt"
              />
            </Content>
          )}
        </Container>
      )}
      <Footer />
    </>
  )
}

export default Details
