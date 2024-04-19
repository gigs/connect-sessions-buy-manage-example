'use client'

import { Button } from '@/components/ui/button'
import { login } from '@/lib/actions'
import { Input } from '@/components/ui/input'

export const LoginForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form role="form" action={login} className="w-96 space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="">
            Enter your mail
          </label>
          <Input
            name="email"
            type="email"
            id="email"
            required
            placeholder="example@gigs.com"
            autoFocus
          />
        </div>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  )
}
