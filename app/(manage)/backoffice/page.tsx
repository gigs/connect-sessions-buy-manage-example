import { Button } from '@/components/ui/button'
import { getSubscriptionsByUser } from '@/lib/api'
import { ManagePlanCard } from '@/components/ManagePlanCard'
import { SideNav } from '@/components/SideNav'
import { envVarsPresent } from '@/lib/utils'
import { redirect } from 'next/navigation'

export default async function BackOfficePage() {
  if (!envVarsPresent()) {
    redirect('/setup-error')
  }

  const { data: subscriptions } = await getSubscriptionsByUser()

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
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
      <Button className="ml-auto cursor-not-allowed" size="sm">
        Add Plan
      </Button>
    </div>
  )
}
