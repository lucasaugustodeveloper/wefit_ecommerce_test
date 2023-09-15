import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;

  border-radius: 0.25rem;

  margin: 0 1rem;
  padding-bottom: 4rem;

  background-color: #ffffff;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: inherit;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  margin-top: 4rem;
  margin-bottom: 2rem;

  width: 100%;
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::after {
    content: '';
    clear: both;
    display: block;

    position: absolute;
    left: -0.3rem;
    bottom: 1.9rem;

    width: 103%;
    height: 0.085rem;

    background-color: #3f3d56;
  }
`

export const Image = styled.img`
  width: 21.9375rem;
  height: 16.61263rem;

  margin-bottom: 2rem;
`

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 1.3125rem;

  padding: 1rem;
  margin: 0 1rem;

  border-radius: 0.25rem;

  background-color: #ffffff;
`

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`

export const CardContainerImage = styled.div`
  width: 4rem;
  height: 5.125rem;

  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;

  }
`

export const CardContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 75%;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    &.spacing {
      &-top {
        padding-top: 0.5rem;

        div:nth-child(2) {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`

export const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: inherit;

  color: #2f2e41;
  `

export const CardPrice = styled.p`
  color: #2f2e41;
  `

export const CardTextTotal = styled.span`
  font-size: 0.75rem;
  color: #999999;
`

export const CardTextPrice = styled.span`
  font-size: 1rem;

  color: #2f2e41;
`
