import ImageShoppingCart from '../../assets/images/shoppingCart.svg'

import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

const modifiersButton = {
  cart: () => css`
    &::before {
      content: '';
      clear: both;
      display: block;
      position: absolute;
      left: -0.85rem;
      top: 0;

      width: 0.85rem;
      height: 0.85rem;

      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;

      background-image: ${`url(${ImageShoppingCart})`};
    }
  `,
}

const modifiersSize = {
  small: () => css`
    max-width: 11.25rem;
  `, 
  medium: () => css`
    max-width: 14.71388rem;
  `, 
  large: () => css`
    max-width: 19.4375rem;
  `,
  full: () => css`
    max-width: 100%;
  `
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.75rem;
  font-weight: inherit;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 0.75rem;

  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  
  background-color: #009edd;
  color: #ffffff;

  width: 100%;

  ${({ size = 'medium' }) => modifiersSize[size]}
  
  .count {
    position: relative;

    ${({ cart }) => !!cart && modifiersButton.cart}
  }

`
