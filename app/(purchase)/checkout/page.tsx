import { ErrorAlert } from '@/components/ErrorAlert'
import { PurchasePlanCard } from '@/components/PurchasePlanCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { OrderSummary } from '@/components/OrderSummary'
import { getPlans } from '@/lib/api'
import { envVarsPresent } from '@/lib/utils'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { UserButton } from '@/components/UserButton'
import { auth } from '@/lib/applicationMocks'

const CheckoutPage = async () => {
  if (!envVarsPresent()) {
    redirect('/setup-error')
  }

  const { error, data: plans } = await getPlans()

  return (
    <div className="flex min-h-screen flex-col bg-[#f2f2f2]">
      {error && <ErrorAlert message={error} />}
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
          Order successfully submitted 🎉
        </h1>
        <div className="grid grid-cols-2 items-start gap-24">
          <OrderSummary />
          {plans && (
            <div className="grid items-start gap-4 md:gap-10">
              <h2 className="text-2xl font-bold">Add a phone plan?</h2>
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {plans.map((plan) => (
                    <CarouselItem key={plan.id}>
                      <PurchasePlanCard
                        title={plan.name}
                        price={plan.price}
                        allowances={plan.allowances}
                        planId={plan.id}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default CheckoutPage
