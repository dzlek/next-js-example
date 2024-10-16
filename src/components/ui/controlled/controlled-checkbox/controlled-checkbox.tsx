

import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
 
import { Checkbox, CheckboxProps } from '@/components/ui/checkbox/checkbox'
 
export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id' | 'checked'>
 
  export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange,  value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })
 
  return (
    <Checkbox
      {...{
        onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}