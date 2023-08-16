import { ReactNode } from 'react'
import st from './Button.module.scss'
import { SortType } from '../../../entities/ticket'

interface ButtonProps {
  children: ReactNode,
  className?: string,
  active?: boolean,
  id?: SortType,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, className, active = true, onClick, id }: ButtonProps) => {
  return (
    <button
      className={[
        className,
        st.button,
        active && st.button_active
      ].filter(Boolean).join(' ')}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  )
}

export default Button