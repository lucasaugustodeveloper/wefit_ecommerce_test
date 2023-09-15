import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 0.4rem;
  padding: 0.625rem 0.6875rem;

  background-color: #ffffff;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 0.125rem;
  flex-direction: column;

  width: 100%;
`

export const Image = styled.img`
  width: 9.1875rem;
  height: 11.75rem;
`

export const Title = styled.h3`
  font-size: 0.75rem;
  font-weight: inherit;
  text-align: center;
  line-height: normal;

  color: #333333;
`

export const Price = styled.p`
  font-size: 1rem;
  font-weight: inherit;
  text-align: center;

  color: #2f2e41;
`
