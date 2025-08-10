'use client'

import { useState } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'

import FieldCommon, { FieldProps as FieldCommonProps } from '../Field'

const Field: React.FC<FieldCommonProps> = ({
  label,
  type = 'text',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const isPasswordType = type === 'password'
  const inputType = isPasswordType ? (isVisible ? 'text' : 'password') : type

  return (
    <FieldCommon
      label={label}
      type={inputType}
      trigger={
        isPasswordType && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute text-lg transition-colors duration-200 -translate-y-1/2 cursor-pointer text-[#7A7A7A] hover:text-[#242424] right-4 top-1/2"
          >
            {isVisible ? <FiEyeOff /> : <FiEye />}
          </button>
        )
      }
      {...rest}
    />
  )
}

export default Field
