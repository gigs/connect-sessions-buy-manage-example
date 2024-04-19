import * as React from 'react'

import { cn } from '@/lib/utils'

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { className, ...inputProps } = props

  return (
    <input
      ref={ref}
      className={cn(
        'block w-full rounded-lg border text-left text-base transition',
        'font-medium placeholder:text-gray-500 focus:border-gray-600 focus:ring-1 focus:ring-gray-600',
        'h-[52px] px-2 py-4 outline-none',
        'border-gray-400 bg-white text-gray-800',
        '[&:not(:placeholder-shown)]:invalid:border-rose-400 [&:not(:placeholder-shown)]:invalid:focus:border-rose-600' +
        '[&:not(:placeholder-shown)]:invalid:ring-rose-600 [&:not(:placeholder-shown)]:invalid:focus:ring-rose-600',
        className,
      )}
      {...inputProps}
    />
  )
})
