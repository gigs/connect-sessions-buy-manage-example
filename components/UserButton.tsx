'use client'

import { logout } from '@/lib/actions'
import { UserCircle, LogOut, Home } from 'lucide-react'

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownPortal,
  DropdownTrigger,
} from '@/components/ui/dropdown'
import Link from 'next/link'

type UserButtonProps = {
  user: string | undefined
}

export const UserButton = ({ user }: UserButtonProps) => {
  if (!user) {
    return null
  }

  return (
    <Dropdown>
      <DropdownTrigger className="outline-none">
        <div className="flex gap-2 text-gray-700 dark:text-gray-300">
          <UserCircle />
          {user}
        </div>
      </DropdownTrigger>
      <DropdownPortal>
        <DropdownContent align="end" sideOffset={5}>
          <DropdownItem className="text-end">
            <Link href="/phone-plans" className="flex gap-2">
              <Home />
              My purchases
            </Link>
          </DropdownItem>
          <DropdownItem onSelect={() => logout()} className="text-end">
            <div className="flex gap-2">
              <LogOut />
              Log out
            </div>
          </DropdownItem>
        </DropdownContent>
      </DropdownPortal>
    </Dropdown>
  )
}
