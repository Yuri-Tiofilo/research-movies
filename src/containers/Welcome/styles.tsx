import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 60px auto;

  display: flex;

  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    padding: 0 1.75rem;
  }
`

export const Content = styled.div`
  max-width: 70rem;
  width: 100%;

  margin: 20px auto;

  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;

    > div {
      width: 100%;

      img {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    flex-direction: column;
    > div {
      width: 100%;
      img {
        width: 350px;
        height: 350px;
      }
    }
  }
`
