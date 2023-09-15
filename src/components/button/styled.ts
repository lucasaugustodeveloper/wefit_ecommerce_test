import ImageShoppingCart from '../../assets/images/shoppingCart.svg'
import MinusIcon from '../../assets/images/minusIcon.svg'
import PlusIcon from '../../assets/images/plusIcon.svg'
import TrashIcon from '../../assets/images/trash.svg'

import styled, { css } from 'styled-components'

import { ButtonProps } from '.'
import { IconButtonProps } from './icon'

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

const modifiersIconButton = {
  minus: () => css`
    background-image: ${`url(${MinusIcon})`};
  `,
  plus: () => css`
    background-image: ${`url(${PlusIcon})`};
  `,
  trash: () => css`
    background-image: ${`url(${TrashIcon})`};
  `,
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

export const Iconbutton = styled.button<IconButtonProps>`
  width: 1.125rem;
  height: 1.125rem;

  border: none;
  border-radius: 1.3rem;
  background: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 65%;

  ${({ icon }) => modifiersIconButton[icon]}
`
