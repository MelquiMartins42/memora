import z from 'zod'

export const createPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Senha é obrigatória' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: 'A senha deve conter pelo menos um caractere especial',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Por favor confirme sua senha' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword'],
  })

export type CreatePasswordData = z.infer<typeof createPasswordSchema>
