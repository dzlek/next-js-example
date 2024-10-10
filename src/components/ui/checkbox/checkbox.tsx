import { FC } from 'react'
import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onCheckedChange, label }) => {
  const handleChange = () => {
    onCheckedChange(!checked)
  }

  return (
    <div className={s.checkboxContainer}>
      <label className={s.checkboxLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={s.checkboxInput}
        />
        <span className={s.customCheckbox}></span>
        {label && <span className={s.checkboxText}>{label}</span>}
      </label>
    </div>
  )
}
