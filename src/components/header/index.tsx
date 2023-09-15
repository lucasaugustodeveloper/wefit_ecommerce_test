import Cart from '../cart'

import * as S from './styled'

export default function Header() {
  return (
    <S.Header>
      <S.Title>WeMovies</S.Title>

      <Cart />
    </S.Header>
  )
}
