import styled from 'styled-components'

type Props = {
  pathImageBackground: string | undefined
}

export const Container = styled.div<Props>`
  @media only screen and (min-width: 992px) {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.97) 10%,
        rgba(0, 0, 0, 0.92) 20%,
        rgba(0, 0, 0, 0.92) 80%,
        rgba(0, 0, 0, 0.97) 100%
      ),
      no-repeat center center
        url(${({ pathImageBackground }) => pathImageBackground});
    background-size: cover;
    height: 100vh;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.div`
  max-width: 60rem;

  margin: 0 auto;
  display: flex;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;

    align-items: center;
    img {
      width: 200px;
    }
  }
`

export const Box = styled.section`
  width: 60%;

  margin-right: 60px;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-right: 0px;

    padding: 15px;
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 100%;
    margin-right: 0px;

    padding: 25px;
  }
`

export const Description = styled.p`
  text-align: justify;

  margin-top: 30px;

  line-height: 1.3rem;
  color: ${({ theme }) => theme.COLORS.WHITE300};
`
