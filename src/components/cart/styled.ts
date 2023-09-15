import CartImage from '../../assets/images/cart.svg'

import styled from 'styled-components'

export const Cart = styled.button`
  font-size: 0.75rem;
  font-weight: 600;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;

  width: 5.12rem;
  height: 2rem;

  position: relative;

  background: transparent;
  color: #999999;

  &::after {
    content: '';
    clear: both;
    display: block;

    position: absolute;
    top: 0;
    right: 0;

    width: 2rem;
    height: 2rem;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    background-image: ${`url(${CartImage})`};
  }

  .cart {
    text-transform: capitalize;

    display: none;

    color: #ffffff;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    width: 8rem;

    .cart {
      display: block;
    }
    p {
      margin-left: 2.4rem;
    }
  }
`
