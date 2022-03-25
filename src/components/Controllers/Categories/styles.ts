import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
`
export const Content = styled.div`
  padding: 6px;

  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  background: ${({ theme }) => theme.COLORS.TEXT_RED};

  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`

export const Title = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
  @media screen and (min-width: 481px) and (max-width: 1023px) {
    font-size: 13px;
  }
`
