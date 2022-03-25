import React from 'react'

import { Footer, H1, Header, HomeList, Pagination, Search } from 'components'
import { useMovies } from 'common/hooks/movies'

import { Container, Content } from './styles'

const Home = () => {
  const { data, handlePage, loading, isFetching, currentPage } = useMovies()

  function paginate(previous: boolean) {
    handlePage(currentPage, previous)

    if (currentPage !== 1) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <Container>
      <Header />

      <Content>
        {isFetching || loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Search totalResults={data?.total_results} />

            <H1 arial-label="Últimos filmes">Últimos filmes</H1>
            {data && <HomeList data={data.results} />}

            {data && data.total_pages !== 1 && (
              <Pagination
                handleMoreResults={previous => paginate(previous)}
                currentPage={currentPage}
              />
            )}
          </>
        )}
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
