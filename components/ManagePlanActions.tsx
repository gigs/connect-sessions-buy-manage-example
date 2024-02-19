'use client'

import { Replace, Trash } from 'lucide-react'
import { Button } from './ui/button'
import { cancelSubscription, changeSubscription } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { PurchaseAddonDialog } from './PurchaseAddonDialog'
import { Addon } from '@/lib/schemas/addon'

type ManagePlanActionsProps = {
  subscriptionId: string
  addons: Addon[]
}

export const ManagePlanActions = ({
  subscriptionId,
  addons,
}: ManagePlanActionsProps) => {
  const router = useRouter()

  const handleCancelClick = async () => {
    const { data: session, error } = await cancelSubscription(subscriptionId)

    if (error) {
      // Do error handling here
    }

    if (session?.url) {
      router.push(session.url)
    }
  }

  const handleChangeClick = async () => {
    const { data: session, error } = await changeSubscription(subscriptionId)

    if (error) {
      // Do error handling here
    }

    if (session?.url) {
      router.push(session.url)
    }
  }

  return (
    <>
      <PurchaseAddonDialog addons={addons} subscriptionId={subscriptionId} />
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-neutral-700"
        onClick={handleChangeClick}
      >
        <Replace className="h-4 w-4" />
        Change Plan
      </Button>
      <Button
        onClick={handleCancelClick}
        variant="ghost"
        className="flex items-center gap-2 text-rose-500"
      >
        <Trash className="h-4 w-4" />
        Cancel Plan
      </Button>
    </>
  )
}
