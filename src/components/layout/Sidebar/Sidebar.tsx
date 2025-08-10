'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import logo from '@/assets/logo.svg'
import classNames from 'classnames'

import Button from '../../common/Button'
import { navGroups } from './sidebar.links'

const Sidebar: React.FC = () => {
  const pathName = usePathname()

  return (
    <aside className="flex flex-col justify-between h-full px-6 pb-6 w-72">
      <header className="flex items-center justify-start h-24 gap-2">
        <Image src={logo} alt="" className="w-10" />

        <h1 className="flex items-center text-3xl font-medium">Memora</h1>
      </header>

      <nav className="flex flex-col justify-between h-full">
        {navGroups.map((group) => {
          return (
            <ul
              key={group.id}
              aria-label={group.label}
              className="flex flex-col gap-4"
            >
              {group.links.map((link) => {
                const isActive = pathName === link.url

                return (
                  <li key={link.url}>
                    <Button
                      href={link.url}
                      alignment="start"
                      buttonWidth="full"
                      variant="secondary"
                      aria-current={isActive ? 'page' : undefined}
                      className={classNames(
                        isActive &&
                          '!text-[#242424] bg-white border !border-[#E1E1E1] shadow shadow-black/5',
                      )}
                    >
                      <link.icon strokeWidth={1.5} />
                      {link.title}
                    </Button>
                  </li>
                )
              })}
            </ul>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
