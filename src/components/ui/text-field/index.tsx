import { ComponentProps, KeyboardEvent, ReactNode, forwardRef } from 'react'
import { Close } from '../close/close'
import { Label } from '../label/label'
import { useGetId } from './useGetID'
import { clsx } from 'clsx'

import s from './text-field.module.scss'
import { SearchIcon } from '../../searchIcon/searchIcon'
import { Typography } from '../typography'


export type TextFieldProps = {
  errorMessage?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  search?: boolean
  value?: string
} & ComponentProps<'input'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      iconEnd,
      iconStart,
      id,
      label,
      onClearClick,
      onEnter,
      onKeyDown,
      required,
      search,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const inputId = useGetId (id)

    if (search) {
      iconStart = <SearchIcon color={'var(--color-text-secondary)'} size={20} />
    }


    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }

    const classNames = {
      clearButton: s.clearButton,
      iconEnd: s.iconEnd,
      iconStart: s.iconStart,
      input: clsx (s.input, showError && s.error),
      inputContainer: s.inputContainer,
      root: clsx(s.box, className),
    }

    const isShowClearButton = onClearClick && typeof rest?.value === 'string' && rest.value.length > 0


    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd || isShowClearButton ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        {label && <Label htmlFor={inputId ?? ''} label={label} required={required} />}
        <div className={classNames.inputContainer}>
          {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            id={inputId}
            onKeyDown={handleKeyDown}
            ref={ref}
            required={required}
            type={'text'}
            {...rest}
          />
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClearClick} type={'button'}>
              {<Close color={'var(--color-border-input-active)'} size={20} />}
            </button>
          )}
          {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
        </div>

        {showError && (
  <Typography variant="error">
    {errorMessage}
  </Typography>
)}
      </div>
    )
  }
)

TextField.displayName = 'TextField'