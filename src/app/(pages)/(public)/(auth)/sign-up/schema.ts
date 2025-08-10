import z from 'zod'

export const profileSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Nome completo é obrigatório' })
    .refine((name) => {
      return (
        name.trim().split(' ').length >= 2,
        {
          message: 'Por favor, digite seu nome completo (nome e sobrenome)',
        }
      )
    })
    .pipe(
      z.string().transform((name) => {
        return name
          .trim()
          .split(' ')
          .filter(Boolean)
          .map((word) => {
            if (word.length > 2) {
              return (
                word[0].toLocaleUpperCase() +
                word[1].substring(1).toLocaleLowerCase()
              )
            }

            return word.toLocaleLowerCase()
          })
          .join(' ')
      }),
    ),
  email: z.email({ message: 'E-mail inválido' }),
})

export type ProfileData = z.infer<typeof profileSchema>

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
