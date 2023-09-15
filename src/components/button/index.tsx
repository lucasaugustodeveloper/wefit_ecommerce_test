import * as S from './styled'

export type ButtonProps = {
  children: React.ReactNode
  cart?: boolean
  count?: boolean
  onClick?: () => void
}

export default function Button({ children, onClick, cart, count }: ButtonProps) {
  return (
    <S.Button cart={cart} onClick={onClick}>
      {count && <p className='count'>0</p>}
      {children}
    </S.Button>
  )
}
