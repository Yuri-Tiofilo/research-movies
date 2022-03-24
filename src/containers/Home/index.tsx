import React from 'react'

import { Footer, Header, HomeList, Pagination, Search } from 'components'
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

            <h1 style={{ margin: '20px 0px' }}>Últimos filmes</h1>
            {data && <HomeList data={data.results} />}

            <Pagination
              handleMoreResults={previous => paginate(previous)}
              currentPage={currentPage}
            />
          </>
        )}
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
