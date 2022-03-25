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

export const Content = styled.div``
