import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home'
import Checkout from '../pages/checkout'
import CheckoutError from '../pages/checkout/error'
import CheckoutSuccess from '../pages/checkout/success'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'checkout',
    element: <Checkout />,
  },
  {
    path: 'checkout/error',
    element: <CheckoutError />
  },
  {
    path: 'checkout/success',
    element: <CheckoutSuccess />
  },
])

export default router
