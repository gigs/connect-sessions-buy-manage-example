'use client'

import { logout } from '@/lib/actions'
import { LogOut } from 'lucide-react'

export const SideNavLogoutButton = () => {
  return (
    <button
      className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-50 hover:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
      onClick={() => logout()}
    >
      <LogOut className="h-4 w-4" />
      Log out
    </button>
  )
}
