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

  @media (min-width: 76.8rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`
