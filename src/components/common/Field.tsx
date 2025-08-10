'use client'

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  trigger?: ReactNode
  icon?: ReactNode
  errorMessage?: string
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      type = 'text',
      label,
      trigger,
      icon,
      errorMessage,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasError = !!errorMessage
    const hasIcon = !!icon

    return (
      <label
        className={twMerge('flex flex-col items-start w-full gap-3', className)}
      >
        {label && <span className="text-xl font-medium">{label}</span>}

        <div className="relative w-full">
          {icon && (
            <div className="absolute -translate-y-1/2 left-4 top-1/2">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            className={classNames(
              'h-14 w-full px-5 text-sm placeholder:text-[#7A7A7A] outline-none bg-white shadow border rounded-full transition-colors duration-200',
              hasError
                ? 'border-red-500 shadow-red-500/30'
                : 'border-[#E1E1E1] shadow-black/5',
              hasIcon && 'pl-13',
            )}
            {...rest}
          />

          {trigger && trigger}

          {(errorMessage || children) && (
            <div className="absolute flex items-center gap-4 -top-7 right-2">
              {errorMessage && (
                <span className="text-sm text-red-500 rounded-md">
                  {errorMessage}
                </span>
              )}
              {children && <div className="flex">{children}</div>}
            </div>
          )}
        </div>
      </label>
    )
  },
)

Field.displayName = 'Field'

export default Field
