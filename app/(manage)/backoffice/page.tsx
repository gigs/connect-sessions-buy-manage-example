import { Button } from '@/components/ui/button'
import { getSubscriptionsByUser } from '@/lib/api'
import { ManagePlanCard } from '@/components/ManagePlanCard'
import { SideNav } from '@/components/SideNav'
import { envVarsPresent } from '@/lib/utils'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { SuccessAlert } from '@/components/SuccessAlert'
import { ErrorAlert } from '@/components/ErrorAlert'

type CallbackAction =
  | 'checkoutAddon'
  | 'changeSubscription'
  | 'cancelSubscription'

type Props = {
  searchParams?: {
    action?: CallbackAction
    status?: 'success' | string
    session_id?: string
  }
}

export default async function BackOfficePage({ searchParams }: Props) {
  if (!envVarsPresent()) {
    redirect('/setup-error')
  }

  const { data: subscriptions } = await getSubscriptionsByUser()

  const hasCallbackStatus = !!searchParams?.status
  const isSuccessfulCallback =
    hasCallbackStatus && searchParams.status === 'success'
  const isFailedCallback =
    hasCallbackStatus && searchParams.status !== 'success'

  const successMessageMap: Record<CallbackAction, string> = {
    checkoutAddon: 'Addon successfully added to subscription!',
    changeSubscription: 'Subscription successfully changed!',
    cancelSubscription: 'Subscription successfully cancelled!',
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {isFailedCallback && <ErrorAlert message={searchParams.status!} />}
      {isSuccessfulCallback && (
        <SuccessAlert message={successMessageMap[searchParams.action!]} />
      )}
      <div className="hidden border-r bg-white dark:bg-gray-800/40 lg:block">
        <SideNav />
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 bg-gray-50 p-4 md:gap-8 md:p-6">
          <Header />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {subscriptions &&
              subscriptions.map((subscription) => (
                <ManagePlanCard
                  key={subscription.id}
                  subscription={subscription}
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Phone Plans</h1>
      <Button asChild className="ml-auto" size="sm">
        <Link href="/checkout">Add Plan</Link>
      </Button>
    </div>
  )
}
