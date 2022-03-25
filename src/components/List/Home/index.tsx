import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import Stars from 'react-stars'

import { ResultsAPIMovies } from 'common/interfaces/movies'
import { defaultUrlImage } from 'common/constants'
import { countStars } from 'common/utils'

import { Container } from './styles'

type Props = {
  data: ResultsAPIMovies[]
}

function ListHome({ data }: Props) {
  return (
    <>
      {data && (
        <Container style={{ maxWidth: '70rem', width: '100%' }}>
          {data.map((element: ResultsAPIMovies, key) => (
            <li key={key}>
              <div className="card">
                <Link
                  to={`/details/${element.id}`}
                  style={{ textDecoration: 'none', color: 'initial' }}
                >
                  <img
                    src={defaultUrlImage.default + element.poster_path}
                    alt={element.title}
                    height={230}
                    width={230}
                  />
                </Link>
                <Stars
                  value={countStars(element?.vote_average)}
                  className="stars"
                />
                <div className="info-box">
                  <Link
                    to={`/details/${element.id}`}
                    style={{ textDecoration: 'none', color: 'initial' }}
                  >
                    <h3>{element.title}</h3>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </Container>
      )}
    </>
  )
}

export default memo(ListHome)
