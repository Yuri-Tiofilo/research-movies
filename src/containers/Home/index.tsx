import React from 'react'

import { Footer, Header, HomeList } from 'components'
import { useMovies } from 'common/hooks/movies'

import { Container, Content } from './styles'

const Home = () => {
  const { data, handlePage, loading, isFetching } = useMovies()

  function paginate() {
    handlePage('2', true)
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Header />

      <Content>
        {isFetching || loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data && <HomeList data={data.results} />}
            <button onClick={() => paginate()}>Teste é isso </button>
          </>
        )}
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
