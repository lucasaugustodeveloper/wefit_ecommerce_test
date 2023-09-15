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
