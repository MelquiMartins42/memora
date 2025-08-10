import { PiGear } from 'react-icons/pi'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

const NotificationItem: React.FC = () => {
  return (
    <DropdownMenuItem>
      <div className="flex items-start gap-2 w-96">
        <div className="flex items-center justify-center p-2 bg-white border border-[#E1E1E1] shadow shadow-black/5 rounded-full">
          <PiGear className="text-2xl" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Your AI Just Got Smarter</h3>

            <span className="text-sm text-[#7A7A7A]">1h ago</span>
          </div>

          <p className="text-xs text-[#7A7A7A]">
            Seja você um educador, criador de conteúdo ou entusiasta, nossa
            ferramenta lhe dá a flexibilidade de gerar, editar e organizar
            questões sem esforço — com tecnologia de IA ou com suas próprias
            mãos.
          </p>
        </div>
      </div>
    </DropdownMenuItem>
  )
}

export default NotificationItem
