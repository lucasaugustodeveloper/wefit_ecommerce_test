import * as S from './styled'

export type ButtonProps = {
  children: React.ReactNode
  cart?: boolean
  count?: boolean
  onClick?: () => void
  size?: 'small' | 'medium' | 'large' | 'full'
}

export default function Button({ children, onClick, cart, count, size = 'medium' }: ButtonProps) {
  return (
    <S.Button cart={cart} onClick={onClick} size={size}>
      {count && <p className='count'>0</p>}
      {children}
    </S.Button>
  )
}
