import { Bell } from 'lucide-react'

import Button from '@/components/common/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import NotificationItem from './NotificationItem'

const NotificationMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-14">
          <Bell strokeWidth={1.5} size={28} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Notificações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NotificationItem />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationMenu
