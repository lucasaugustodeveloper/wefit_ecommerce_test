import Header from '../../components/header'

import Button from '../../components/button'
import PurchaseSuccess from '../../assets/images/purchase_success.svg'

import * as S from './styled'

export default function SuccessCheckout() {
  return(
    <>
      <Header />

      <S.Container>
        <S.Title>
          Compra realizada <br />
          com sucesso!
        </S.Title>

        <S.ContainerImage>
          <S.Image src={PurchaseSuccess} alt="Purchase Success" />
        </S.ContainerImage>


        <Button size="small">voltar</Button>
      </S.Container>
    </>
  )
}
