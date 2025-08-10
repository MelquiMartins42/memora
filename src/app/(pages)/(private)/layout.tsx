import Image from 'next/image'

import photo from '@/assets/photo.jpg'
import NotificationMenu from '@/features/dashboard/components/Notification/NotificationMenu'
import { ChevronDown, MessageCircle, Search } from 'lucide-react'

import Button from '@/components/common/Button'
import Field from '@/components/common/Field'
import Sidebar from '@/components/layout/Sidebar/Sidebar'

import RootLayout from '../layout'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <Sidebar />

      <main className="flex flex-col items-center flex-1 h-svh">
        <header className="flex items-center justify-between w-full h-24 px-6">
          <Field
            icon={<Search strokeWidth={1.5} size={28} color="#7A7A7A" />}
            placeholder="Pesquise por qualquer coisa"
            className="w-96"
          />

          <ul className="flex items-center gap-2">
            <li>
              <Button variant="secondary" className="w-14">
                <MessageCircle strokeWidth={1.5} size={28} />
              </Button>
            </li>
            <li>
              <NotificationMenu />
            </li>
            <li>
              <button className="flex items-center justify-center gap-4 cursor-pointer">
                <div className="p-0.5 border-3 border-[#e4e4e4] rounded-full">
                  <Image
                    src={photo}
                    alt=""
                    className="object-cover object-center rounded-full w-14 h-14"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <span className="font-medium">Melqui Martins</span>
                  <span className="text-sm text-[#7A7A7A]">
                    Nível 1 - Iniciante
                  </span>
                </div>

                <ChevronDown />
              </button>
            </li>
          </ul>
        </header>

        <section className="flex w-full h-full pl-6">
          <article className="flex w-full h-full p-6 bg-white rounded-tl-4xl shadow border border-[#E1E1E1] shadow-black/5">
            {children}
          </article>
        </section>
      </main>
    </RootLayout>
  )
}
