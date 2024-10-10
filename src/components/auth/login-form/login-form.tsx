import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
// import { Checkbox } from '../../ui/checkbox/checkbox'
import { TextField } from '../../ui/text-field'
import { Button } from '../../ui/button/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
 


export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.string().optional(),
  })
  
  type FormValues = z.infer<typeof loginSchema>
  
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
   
  console.log('errors: ', errors)
 
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
 

  return (
    <form onSubmit={onSubmit}>
      <DevTool control={control} />
        <TextField {...register('email')} label={'Email'} errorMessage={errors.email?.message} />
        <TextField {...register('password')} label={'Password'} errorMessage={errors.password?.message} />
        <ControlledCheckbox onCheckedChange={()=>{}} label={'Remember me'} control={control} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
