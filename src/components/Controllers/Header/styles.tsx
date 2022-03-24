import styled from 'styled-components'

export const Container = styled.div`
  height: 5rem;

  border-bottom: 0.1px solid ${({ theme }) => theme.COLORS.TITLE};
  width: 100%;
`

export const Content = styled.div`
  max-width: 70rem;
  height: 5rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  align-items: center;

  justify-content: space-between;

  width: 100%;

  img {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;

    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    padding: 2rem 1.5rem;

    img {
      width: 180px;
      height: 180px;
    }
  }
`

export const Avatar = styled.div`
  height: 3rem;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.PRIMARY};

  border-radius: 50%;

  font-size: 20px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`
