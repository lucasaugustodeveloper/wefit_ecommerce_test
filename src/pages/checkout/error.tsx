import Header from '../../components/header'

import Button from '../../components/button'
import CartEmpty from '../../assets/images/cart_empty.svg'

import * as S from './styled'

export default function ErrorCheckout() {
  return (
    <>
      <Header />

      <S.Container>
        <S.Title>
          Parece que não <br />
          há nada por aqui :(
        </S.Title>

        <S.ContainerImage>
          <S.Image src={CartEmpty} alt="Cart empty" />
        </S.ContainerImage>


        <Button size="small">voltar</Button>
      </S.Container>
    </>
  )
}
