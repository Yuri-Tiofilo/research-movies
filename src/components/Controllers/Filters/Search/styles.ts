import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 70rem;

  > div {
    margin-top: 20px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.SUBTEXT};

    margin-top: 10px;
  }

  b {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;

    padding: 20px;
  }
`

export const Form = styled.form`
  max-width: 30rem;
  width: 100%;
`
