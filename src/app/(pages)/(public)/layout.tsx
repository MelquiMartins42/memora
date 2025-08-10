import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

import Button from '@/components/common/Button'

import RootLayout from '../layout'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <section className="flex flex-col w-full h-full">
        <header className="w-full h-24">
          <div className="fixed z-50 flex items-center justify-center w-full h-24 bg-[#F6F6F6]">
            <nav className="flex items-center justify-between w-10/12">
              <Link href="/home" className="">
                <Image src={logo} alt="flex items-center gap-2" />
                <h1 className="text-5xl font-medium">Memora</h1>
              </Link>

              <ul className="flex items-center gap-8 text-lg">
                <li>
                  <Link
                    href="/home"
                    className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-u"
                    className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
                  >
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
                  >
                    Contatos
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <Button href="/sign-up" variant="secondary">
                  Criar minha conta
                </Button>

                <Button href="/sign-in">Entrar</Button>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex items-center justify-center w-full h-full overflow-y-auto">
          {children}
        </main>
      </section>
    </RootLayout>
  )
}
