import { ButtonHTMLAttributes } from 'react'

import Link from 'next/link'

import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'flex items-center justify-center h-14 p-3 text-lg rounded-full transition-colors duration-300 outline-none',
  {
    variants: {
      variant: {
        default:
          'text-white font-medium bg-[#242424] hover:bg-[#303030] hover:shadow hover:shadow-black/5 focus:bg-[#303030] focus:shadow focus:shadow-black/5',
        secondary:
          'border border-transparent text-[#606060] hover:text-[#242424] hover:bg-white hover:border-[#E1E1E1] hover:shadow hover:shadow-black/5 cursor-pointer transition-colors',
      },
      active: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
      active: false,
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isActive?: boolean
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  isActive,
  variant,
  href,
  ...rest
}) => {
  const classes = buttonVariants({
    active: !!isActive,
    variant,
    className,
  })

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} disabled={isActive} {...rest}>
      {children}
    </button>
  )
}

export default Button
