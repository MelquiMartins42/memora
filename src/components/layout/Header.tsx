import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

import Button from '../common/Button'

const Header: React.FC = () => {
  return (
    <header className="w-full h-24">
      <div className="fixed z-50 flex items-center justify-center w-full h-24 bg-[#F6F6F6]">
        <nav className="flex items-center justify-between w-10/12">
          <Link href="">
            <h1 className="flex items-center gap-2 text-5xl font-medium">
              <Image src={logo} alt="" />
              Memora
            </h1>
          </Link>

          <ul className="flex items-center gap-8 text-lg">
            <li>
              <Link
                href=""
                className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-[#606060] hover:text-[#242424] focus:text-[#242424] transition-colors"
              >
                Comunidade
              </Link>
            </li>
            <li>
              <Link
                href=""
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
  )
}

export default Header
