import React, { memo } from 'react'
import { ResultsAPIMovies } from 'common/interfaces/movies'
import { defaultUrlImage } from 'common/constants'

import { Container } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  data: ResultsAPIMovies[]
}

function ListHome({ data }: Props) {
  return (
    <>
      {data && (
        <Container style={{ maxWidth: '70rem', width: '100%' }}>
          {data.map((element, key) => (
            <li key={key}>
              <>
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
                <div>
                  <Link
                    to={`/details/${element.id}`}
                    style={{ textDecoration: 'none', color: 'initial' }}
                  >
                    <h3>{element.title}</h3>
                  </Link>
                </div>
              </>
            </li>
          ))}
        </Container>
      )}
    </>
  )
}

export default memo(ListHome)
