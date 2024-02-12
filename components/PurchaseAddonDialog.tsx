'use client'

import { PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Addon } from '@/lib/schemas/addon'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { formatPrice } from '@/lib/formatters'
import { checkoutAddon } from '@/lib/actions'
import { useRouter } from 'next/navigation'

type PurchaseAddonDialogProps = {
  addons: Addon[]
  subscriptionId: string
}

export const PurchaseAddonDialog = ({
  addons,
  subscriptionId,
}: PurchaseAddonDialogProps) => {
  const router = useRouter()

  if (addons.length === 0) {
    return null
  }

  const handleBuyAddonClick = async (addonId: string) => {
    const { data: session } = await checkoutAddon(addonId, subscriptionId)

    if (session?.url) {
      router.push(session.url)
    }
  }

  return (
    <Dialog>
      <DialogTrigger className=" inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-white transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300">
        <PlusCircle className="h-4 w-4" />
        Buy Add-on
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-8">Choose an Add-on to buy</DialogTitle>
        </DialogHeader>
        {addons.map((addon) => (
          <Card key={addon.id}>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">{addon.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex flex-col space-y-2">
                <div>Add-on price</div>
                <div className="text-xl font-semibold">
                  {formatPrice(addon.price)}
                </div>
              </div>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => handleBuyAddonClick(addon.id)}
              >
                Add to plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </DialogContent>
    </Dialog>
  )
}
