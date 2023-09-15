import styled, { css } from 'styled-components'

type ContainerProps = {
  cards: boolean | number
}

export const Container = styled.main<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  padding: 0 1rem;

  width: 100%;

  ${({ cards }) => !cards && css`
    justify-content: center;
    align-items: center;

    height: 85vh;
  `}
  `
