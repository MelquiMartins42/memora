import { FieldsetHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface GroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string
}

const Group: React.FC<GroupProps> = ({ legend, children, className }) => {
  return (
    <fieldset className={twMerge('flex flex-col gap-4 w-full', className)}>
      <legend className="sr-only">{legend}</legend>
      {children}
    </fieldset>
  )
}

export default Group
