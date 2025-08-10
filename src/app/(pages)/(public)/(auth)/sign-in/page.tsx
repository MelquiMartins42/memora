'use client'

import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@/components/common/Form'

import { SignInData, signInSchema } from './schema'

const SignIn: React.FC = () => {
  const [isPanding, startTranstion] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignInData) => {
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
        <Form.Header.Title>Bem-vindo de volta!</Form.Header.Title>
        <Form.Header.Description>
          Olá amigo, por favor insira seus dados.
        </Form.Header.Description>
      </Form.Header.Root>

      <Form.Group legend="Informações para autenticação">
        <Form.Field
          label="E-mail"
          {...register('email')}
          errorMessage={errors.email?.message}
          placeholder="Seu e-mail"
        />
        <Form.Field
          label="Senha"
          type="password"
          {...register('password')}
          errorMessage={errors.password?.message}
          placeholder="Sua senha"
        >
          <Link href="/forgot-password" className="hover:underline">
            Esqueci minha senha
          </Link>
        </Form.Field>
      </Form.Group>

      <Form.Submit isLoading={isPanding} className="w-full">
        Entrar
      </Form.Submit>

      <Link href="/sign-up" className="text-[#7A7A7A]">
        Não tem uma conta?{' '}
        <span className="text-[#242424] font-medium hover:underline">
          Criar minha conta
        </span>
      </Link>
    </Form.Root>
  )
}

export default SignIn
