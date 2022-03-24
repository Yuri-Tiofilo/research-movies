import styled from 'styled-components'

export const Container = styled.section`
  padding-right: 80px;
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

    span {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-weight: bold;
    }
  }
`

export const Form = styled.form``
