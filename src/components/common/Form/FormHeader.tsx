import { HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

type TitleProps = HTMLAttributes<HTMLHeadingElement>

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h2 className={twMerge('text-5xl font-semibold', className)}>{children}</h2>
  )
}

type DescriptionProps = HTMLAttributes<HTMLParagraphElement>

const Description: React.FC<DescriptionProps> = ({ children, className }) => {
  return (
    <p className={twMerge('text-xl text-[#7A7A7A]', className)}>{children}</p>
  )
}

type HeaderProps = HTMLAttributes<HTMLElement>

const Root: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header
      className={twMerge('flex flex-col items-center text-center', className)}
    >
      {children}
    </header>
  )
}

const Header = {
  Root,
  Title,
  Description,
}

export default Header
