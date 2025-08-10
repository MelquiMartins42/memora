'use client'

import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@/components/common/Form'

import { CreatePasswordData, createPasswordSchema } from '../schema'

const ResetPassword: React.FC = () => {
  const [isPanding, startTranstion] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePasswordData>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: CreatePasswordData) => {
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
        <Form.Header.Title>Redefinir sua senha</Form.Header.Title>
        <Form.Header.Description>
          Digite sua nova senha abaixo. Certifique-se de que ela seja forte e
          segura.
        </Form.Header.Description>
      </Form.Header.Root>

      <Form.Group legend="Defina sua senha">
        <Form.Field
          label="Senha"
          type="password"
          {...register('password')}
          errorMessage={errors.password?.message}
          placeholder="Sua senha"
        />
        <Form.Field
          label="Confirmar Senha"
          type="password"
          {...register('confirmPassword')}
          errorMessage={errors.confirmPassword?.message}
          placeholder="Confirme se senha"
        />
      </Form.Group>

      <Form.Submit isLoading={isPanding} className="w-full">
        Resetar senha
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

export default ResetPassword
