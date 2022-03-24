import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;

  margin: 0 auto;
  display: flex;
  justify-content: center;

  margin: 40px 0px;

  button {
    margin-right: 20px;
    padding: 10px;
    border: 0;
    background: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;

    display: flex;
    align-items: center;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`
