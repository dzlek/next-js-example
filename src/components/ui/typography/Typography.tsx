import { ComponentPropsWithoutRef, ElementType } from 'react'
import './Typography.module.scss';

import { clsx } from 'clsx'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  grey?: boolean
  isRequired?: boolean
  variant?:
    | 'badge'
    | 'bold_text_14'
    | 'bold_text_16'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'medium_text_14'
    | 'regular_link'
    | 'regular_text_14'
    | 'regular_text_16'
    | 'semi-bold_small_text'
    | 'small_link'
    | 'small_text'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const {
    as: Component = 'p',
    className,
    grey,
    isRequired = false,
    variant = 'regular_text_14',
    ...rest
  } = props
  const cn = clsx(s[variant], grey && s.grey, isRequired && s.required, className)

  return <Component className={cn} {...rest} />
}
