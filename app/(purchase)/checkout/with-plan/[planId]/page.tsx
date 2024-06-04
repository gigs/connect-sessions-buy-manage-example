import { ErrorAlert } from '@/components/ErrorAlert'
import { PurchasedPlanCard } from '@/components/PurchasedPlanCard'
import { getPlan } from '@/lib/api'
import Image from 'next/image'
import { UserButton } from '@/components/UserButton'
import { auth } from '@/lib/applicationMocks'
import { OrderSummary } from '@/components/OrderSummary'
import { clsx } from 'clsx'

type Props = {
  params: {
    planId: string
  }
  searchParams: {
    status: 'success' | string
    session_id: string
  }
}

const CheckoutPage = async ({ params, searchParams }: Props) => {
  const { error, data: plan } = await getPlan(params.planId)

  const status = searchParams?.status
  const isPlanAddedSuccessfully = status === 'success'
  const callbackErrorStatus = status !== 'success' ? status : ''
  const errorMessage = error || callbackErrorStatus

  return (
    <div className="flex min-h-screen flex-col bg-[#f2f2f2]">
      {errorMessage && <ErrorAlert message={errorMessage} />}
      <header className="flex items-center justify-between bg-white p-6 shadow-md dark:bg-gray-800">
        <Image
          alt="Company Logo"
          className="h-6 w-auto"
          height={20}
          src="/tigr-logo.webp"
          width={100}
        />
        <UserButton user={auth.getUser().email} />
      </header>
      <main className="mx-auto max-w-6xl px-12 py-6 ">
        <h1 className="mb-24 mt-6 text-center text-3xl font-bold">
          {isPlanAddedSuccessfully
            ? 'A phone plan was added to your order 🎉'
            : 'Failed to add phone plan 😢'}
        </h1>
        <div className="grid grid-cols-2 items-start gap-24">
          <OrderSummary />
          {plan && (
            <div
              className={clsx(
                'grid items-start gap-4 md:gap-10',
                !isPlanAddedSuccessfully && 'opacity-30',
              )}
            >
              <h2 className="text-2xl font-bold">Phone plan</h2>
              <PurchasedPlanCard
                title={plan.name}
                price={plan.price}
                allowances={plan.allowances}
              />
              {isPlanAddedSuccessfully && (
                <p className="text-sm text-gray-400">
                  You have received an email with instructions on how to
                  activate the plan on your new phone.
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default CheckoutPage
