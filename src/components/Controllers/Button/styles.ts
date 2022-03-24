import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  height: 56px;
  border-radius: 10px;
  font-size: 18px;
  text-transform: uppercase;
  border: 0;
  padding: 0 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(85%);
  }
`
