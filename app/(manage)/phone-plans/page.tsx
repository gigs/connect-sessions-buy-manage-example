import { Button } from '@/components/ui/button'
import { getConnectSession, getSubscriptionsByUser } from '@/lib/api'
import { ManagePlanCard } from '@/components/ManagePlanCard'
import { SideNav } from '@/components/SideNav'
import { envVarsPresent } from '@/lib/utils'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { SuccessAlert } from '@/components/SuccessAlert'
import { ErrorAlert } from '@/components/ErrorAlert'
import { ConnectSession } from '@/lib/schemas/connectSession'

type Props = {
  searchParams?: {
    status?: 'success' | string
    session_id?: string
  }
}

const successMessageMap: Partial<
  Record<ConnectSession['intent']['type'], string>
> = {
  checkoutAddon: 'Addon successfully added to subscription!',
  changeSubscription: 'Subscription successfully changed!',
  cancelSubscription: 'Subscription successfully cancelled!',
  checkoutNewSubscription: 'Subscription successfully added!',
}

export default async function PhonePlansPage({ searchParams }: Props) {
  if (!envVarsPresent()) {
    redirect('/setup-error')
  }

  const { data: subscriptions } = await getSubscriptionsByUser()

  const isCallback = !!searchParams?.session_id
  const isSuccessfulCallback = isCallback && searchParams.status === 'success'
  const isFailedCallback = isCallback && searchParams.status !== 'success'

  const { data: connectSession } = isCallback
    ? await getConnectSession(searchParams.session_id!)
    : { data: null }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {isFailedCallback && <ErrorAlert message={searchParams.status!} />}
      {isSuccessfulCallback && connectSession && (
        <SuccessAlert
          message={
            successMessageMap[connectSession.intent.type] ??
            'Action completed successfully!'
          }
        />
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
