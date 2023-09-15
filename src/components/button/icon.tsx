import * as S from './styled'

export type IconButtonProps = {
  icon: 'minus' | 'plus' | 'trash'
  onClick?: () => void
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return <S.Iconbutton icon={icon} onClick={onClick} />
}
