import { FC } from 'react'
import s from './label.module.scss'

type LabelProps = {
  htmlFor: string
  label: React.ReactNode
  required?: boolean
}

export const Label: FC<LabelProps> = ({ htmlFor, label, required = false }) => {
  return (
    <label className={s.label} htmlFor={htmlFor}>
      {label}
      {required && <span className={s.required}>*</span>}
    </label>
  )
}
