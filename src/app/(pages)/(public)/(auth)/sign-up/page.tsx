'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'

import Button from '@/components/common/Button'
import Form from '@/components/common/Form'

import {
  CreatePasswordData,
  createPasswordSchema,
  ProfileData,
  profileSchema,
} from './schema'

const SignUp: React.FC = () => {
  const [step, setStep] = useState(0)
  const [isPanding, startTranstion] = useTransition()

  const steps = [
    {
      title: 'Criar uma conta',
      description: 'Vamos começar sua jornada conosco hoje',
      legend: 'Informações pessoais',
    },
    {
      title: 'Crie sua senha',
      description: 'Crie uma senha forte para manter sua conta segura',
      legend: 'Defina sua senha',
    },
  ]

  const profileForm = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<CreatePasswordData>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const handleNextStep = () => {
    startTranstion(async () => {
      try {
        const isValid = await profileForm.trigger()
        if (isValid) setStep(1)
      } catch (err) {
        console.error(err)
      }
    })
  }

  const handleBackStep = () => {
    setStep(0)
    reset()
  }

  const onFinalSubmit = (data: CreatePasswordData) => {
    startTranstion(async () => {
      try {
        const profileData = profileForm.getValues()

        const margedData = {
          ...profileData,
          ...data,
        }

        console.log(margedData)
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <Form.Root onSubmit={handleSubmit(onFinalSubmit)}>
      <div className="flex flex-col gap-4">
        {step > 0 && (
          <Button
            type="button"
            onClick={handleBackStep}
            variant="secondary"
            className="w-14"
          >
            <ArrowLeft strokeWidth={1.5} />
          </Button>
        )}
        <Form.Header.Root>
          <Form.Header.Title>{steps[step].title}</Form.Header.Title>
          <Form.Header.Description>
            {steps[step].description}
          </Form.Header.Description>
        </Form.Header.Root>
      </div>

      <Form.StepProgressBar current={step} maxStep={steps.length} />

      <Form.Group legend={steps[step].legend}>
        {step === 0 && (
          <>
            <Form.Field
              label="Nome"
              {...profileForm.register('name')}
              errorMessage={profileForm.formState.errors.name?.message}
              placeholder="Seu nome e sobrenome"
            />
            <Form.Field
              label="E-mail"
              {...profileForm.register('email')}
              errorMessage={profileForm.formState.errors.email?.message}
              placeholder="Seu e-mail"
            />
          </>
        )}

        {step === 1 && (
          <>
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
            <span className="text-center text-[#7A7A7A]">
              Ao se cadastrar, você aceita nossos{' '}
              <Link
                href=""
                className="text-[#242424] font-medium hover:underline"
              >
                termos de uso
              </Link>{' '}
              e a nossa{' '}
              <Link
                href=""
                className="text-[#242424] font-medium hover:underline"
              >
                política de privacidade
              </Link>
              .
            </span>
          </>
        )}
      </Form.Group>

      {step === 0 && (
        <Form.Submit
          type="button"
          onClick={handleNextStep}
          isLoading={isPanding}
          className="w-full"
        >
          Continuar
        </Form.Submit>
      )}

      {step === 1 && (
        <Form.Submit isLoading={isPanding} className="w-full">
          Criar conta
        </Form.Submit>
      )}

      <Link href="/sign-in" className="text-[#7A7A7A]">
        Já tem uma conta?{' '}
        <span className="text-[#242424] font-medium hover:underline">
          Entrar na minha conta
        </span>
      </Link>
    </Form.Root>
  )
}

export default SignUp
