import Button from '../button'

import * as S from './styled'

export type CardProps = {
  id?: number
  image: string
  title: string
  price: string
}

export default function Card({ image, title, price }: CardProps) {
  return (
    <S.Container>
      <S.Card>
        <S.Image
          src={image}
          alt={title}
        />
        <S.Title>{title}</S.Title>
        <S.Price>R$ {price}</S.Price>
      </S.Card>

      <Button cart count>adiciona ao carrinho</Button>
    </S.Container>
  )
}
