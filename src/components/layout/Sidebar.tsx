'use client'

import { IoHelp } from 'react-icons/io5'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import logo from '@/assets/logo.svg'
import classNames from 'classnames'
import {
  Archive,
  Bot,
  House,
  Library,
  Settings,
  TrendingUp,
  WalletCards,
} from 'lucide-react'

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

import Button from '../common/Button'

const inboxNav = [
  {
    title: 'Caixa de Entrada',
    href: '',
    icon: Archive,
  },
  {
    title: 'IA no Memora',
    href: '',
    icon: Bot,
  },
] as const

const mainNav = [
  {
    title: 'Início',
    href: '/',
    icon: House,
  },
  {
    title: 'Estatística',
    href: '',
    icon: TrendingUp,
  },
  {
    title: 'Meus Baralhos',
    href: '',
    icon: WalletCards,
  },
  {
    title: 'Biblioteca',
    href: '',
    icon: Library,
  },
] as const

const settingsNav = [
  {
    title: 'Configurações',
    href: '',
    icon: Settings,
  },
  {
    title: 'Ajuda',
    href: '',
    icon: IoHelp,
  },
] as const

const Sidebar: React.FC = () => {
  const pathName = usePathname()

  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <SidebarComponent className="px-6" collapsible="icon">
      <SidebarHeader className="flex items-start justify-center h-24">
        <h1 className="flex items-center gap-2 text-3xl font-medium">
          <Image src={logo} alt="" className="w-10" />

          {!isCollapsed && 'Memora'}
        </h1>
      </SidebarHeader>

      <SidebarContent className="justify-between pb-6">
        <SidebarMenu>
          {inboxNav.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <Button
                  href={item.href}
                  variant="secondary"
                  className={classNames(
                    'justify-start w-full gap-2',
                    'group-data-[collapsible=icon]:justify-center', // centraliza no colapso
                    pathName === item.href &&
                      '!text-[#242424] !bg-white !border-[#E1E1E1] !shadow !shadow-black/5',
                  )}
                >
                  <item.icon strokeWidth={1.5} />
                  <span className="group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                </Button>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

        <SidebarMenu>
          {mainNav.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <Button
                  href={item.href}
                  variant="secondary"
                  className={classNames(
                    'justify-start w-full gap-2',
                    'group-data-[collapsible=icon]:justify-center', // centraliza no colapso
                    pathName === item.href &&
                      '!text-[#242424] !bg-white !border-[#E1E1E1] !shadow !shadow-black/5',
                  )}
                >
                  <item.icon strokeWidth={1.5} />
                  <span className="group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                </Button>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

        <SidebarMenu>
          {settingsNav.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <Button
                  href={item.href}
                  variant="secondary"
                  className={classNames(
                    'justify-start w-full gap-2',
                    'group-data-[collapsible=icon]:justify-center', // centraliza no colapso
                    pathName === item.href &&
                      '!text-[#242424] !bg-white !border-[#E1E1E1] !shadow !shadow-black/5',
                  )}
                >
                  <item.icon strokeWidth={1.5} />
                  <span className="group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                </Button>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
    </SidebarComponent>
  )
}

export default Sidebar
