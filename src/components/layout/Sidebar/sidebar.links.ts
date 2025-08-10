import { IoHelp } from 'react-icons/io5'

import {
  Archive,
  Bot,
  House,
  Library,
  Settings,
  TrendingUp,
  WalletCards,
} from 'lucide-react'

const inboxNav = [
  {
    title: 'Caixa de Entrada',
    url: '/inbox',
    icon: Archive,
  },
  {
    title: 'IA no Memora',
    url: '',
    icon: Bot,
  },
] as const

const mainNav = [
  {
    title: 'Início',
    url: '/',
    icon: House,
  },
  {
    title: 'Estatística',
    url: '/statistic',
    icon: TrendingUp,
  },
  {
    title: 'Meus Baralhos',
    url: '/my-decks',
    icon: WalletCards,
  },
  {
    title: 'Biblioteca',
    url: '/libray',
    icon: Library,
  },
] as const

const settingsNav = [
  {
    title: 'Configurações',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'Ajuda',
    url: '/help',
    icon: IoHelp,
  },
] as const

export const navGroups = [
  { id: 'inbox', label: 'Caixa de entrada', links: inboxNav },
  { id: 'main', label: 'Menu principal', links: mainNav },
  { id: 'settings', label: 'Configurações e ajuda', links: settingsNav },
] as const
