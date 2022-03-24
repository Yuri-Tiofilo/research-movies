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

  background: #f90;

  display: flex;
  align-items: center;

  width: 100%;
`
