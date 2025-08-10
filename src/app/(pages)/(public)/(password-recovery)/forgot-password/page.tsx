'use client'

import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@/components/common/Form'

import { forgotPasswordData, forgotPasswordSchema } from './schema'

const ForgotPassword: React.FC = () => {
  const [isPanding, startTranstion] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: forgotPasswordData) => {
    startTranstion(async () => {
      try {
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    })
  }
  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Header.Root>
        <Form.Header.Title>Esqueceu sua senha?</Form.Header.Title>
        <Form.Header.Description>
          Não se preocupe, isso acontece. Insira seu e-mail e enviaremos um link
          para redefinir sua senha.
        </Form.Header.Description>
      </Form.Header.Root>

      <Form.Group legend="Informações para recuperação da senha">
        <Form.Field
          label="E-mail"
          {...register('email')}
          errorMessage={errors.email?.message}
          placeholder="Seu e-mail"
        />
      </Form.Group>

      <Form.Submit isLoading={isPanding} className="w-full">
        Recuperar minha senha
      </Form.Submit>

      <Link href="/sign-in" className="text-[#7A7A7A]">
        Lembrou da sua senha?{' '}
        <span className="text-[#242424] font-medium hover:underline">
          Entrar na minha conta
        </span>
      </Link>
    </Form.Root>
  )
}

export default ForgotPassword
