import Link from 'next/link'
import Image from 'next/image'
import { Phone, ShoppingCart, Smartphone, User2 } from 'lucide-react'

export const SideNav = () => {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Image
          alt="Company Logo"
          className="h-6 w-auto"
          height={20}
          src="/tigr-logo.webp"
          width={100}
        />
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start gap-2  px-4 text-sm font-medium">
          <Link
            className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <ShoppingCart className="h-4 w-4" />
            Orders
          </Link>
          <Link
            className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <User2 className="h-4 w-4" />
            Profile
          </Link>
          <Link
            className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <Smartphone className="h-4 w-4" />
            Devices
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <Phone className="h-4 w-4" />
            Phone Plans
          </Link>
        </nav>
      </div>
    </div>
  )
}
