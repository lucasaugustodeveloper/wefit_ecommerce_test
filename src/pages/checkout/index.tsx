import Header from '../../components/header'
import IconButton from '../../components/button/icon'

import * as S from './styled'

export default function Checkout() {
  return (
    <>
      <Header />

      <S.ContainerCheckout>
        <S.Card>
          <S.CardContainerImage>
            <img
              src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
              alt="Homem Aranha"
            />
          </S.CardContainerImage>

          <S.CardContainerInfo>
            <div className='container'>
              <S.CardTitle>Homem Aranha</S.CardTitle>
              <S.CardPrice>R$ 29,99</S.CardPrice>
              
              <IconButton icon="trash" onClick={() => false} />
            </div>

            <div className='container spacing-top'>
              <div>quantity</div>

              <div>
                <S.CardTextTotal>Subtotal</S.CardTextTotal>
                <S.CardTextPrice>R$ 29,99</S.CardTextPrice>
              </div>
            </div>

          </S.CardContainerInfo>
        </S.Card>
      </S.ContainerCheckout>
    </>
  )
}
