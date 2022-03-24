import styled, { keyframes } from 'styled-components'

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform:translateX(-100px);
  }
  to {
    opacity:1;
    transform:translateX(0)
  }
`

export const Container = styled.section`
  padding-right: 80px;

  width: 70%;

  animation: ${appearFromLeft} 1s;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding-right: 0px;
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 100%;
    padding-right: 0px;
  }
`

export const ContentTitle = styled.div`
  width: 100%;

  margin-bottom: 20px;

  > span {
    font-size: 1.2rem;
  }

  p {
    margin-top: 30px;

    margin-bottom: 30px;
    font-size: 1.2rem;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    margin-bottom: 15px;

    > span {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    h1 {
      font-size: 3.125rem;
      line-height: 3rem;
      font-weight: 900;
      margin-top: 2rem;

      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 100%;

    h1 {
      font-size: 3.725rem;
      line-height: 3.725rem;
      font-weight: 900;
    }
  }
`

export const Form = styled.form``
