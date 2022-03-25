import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 10px;
  border: 1px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    `}
    input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.SUBTEXT};
    }
    ${props =>
      props.isFocused &&
      css`
        color: ${({ theme }) => theme.COLORS.WHITE300};
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
      `}
    ${props =>
      props.isFilled &&
      css`
        color: ${({ theme }) => theme.COLORS.WHITE300};
      `}
  }
`
