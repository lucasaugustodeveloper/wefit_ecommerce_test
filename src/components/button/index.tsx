import * as S from './styled'

export type ButtonProps = {
  children: React.ReactNode
  cart?: boolean
  count?: boolean
  onClick?: () => void
  size?: 'small' | 'medium' | 'large' | 'full'
  active?: boolean
}

export default function Button({
  children,
  onClick,
  cart,
  count,
  size = 'medium',
  active
}: ButtonProps) {
  return (
    <S.Button cart={cart} onClick={onClick} size={size} active={active}>
      {count && <p className='count'>{active ? 1 : 0}</p>}
      {children}
    </S.Button>
  )
}
