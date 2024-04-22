'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/lib/utils'

const Dropdown = DropdownMenuPrimitive.Root

const DropdownTrigger = DropdownMenuPrimitive.Trigger

const DropdownPortal = DropdownMenuPrimitive.Portal

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    className={cn(
      'border border-neutral-200 bg-white px-4 py-2 shadow-lg duration-200 dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-lg',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-1/2',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-1/2',
      className,
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Content>
))
DropdownContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'cursor-default select-none rounded-md px-2 py-2 text-sm outline-none',
      'text-gray-700 focus:bg-gray-50 dark:text-gray-300 dark:focus:bg-gray-900',
      className,
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
))
DropdownItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownPortal,
  DropdownItem,
}
