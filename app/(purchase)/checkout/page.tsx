import { ErrorAlert } from '@/components/ErrorAlert'
import { PurchasePlanCard } from '@/components/PurchasePlanCard'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
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

const OrderSummary = () => {
  return (
    <div>
      <h2 className="mb-10 text-2xl font-bold">Order Details</h2>
      <Card className="flex flex-col items-start gap-4 p-8 md:gap-10 ">
        <div className="flex items-center">
          <Image
            alt="Phone image"
            className="w-24 drop-shadow-xl"
            height={80}
            src="/iphone.png"
            style={{
              objectFit: 'contain',
            }}
            width={40}
          />
          <div className="ml-12 flex flex-col items-start text-left">
            <h1 className="text-center text-xl font-bold">Acme Smartphone</h1>
            <p className="text-center text-sm text-gray-500">128GB Storage</p>
            <p className="text-center text-sm text-gray-500">Midnight Black</p>
            <p className="text-center text-sm text-gray-500">eSIM + pSIM</p>
            <h2 className="mt-2 text-center text-lg font-semibold md:text-xl">
              $699
            </h2>
          </div>
        </div>
        <div className="w-full border-t pt-4">
          <h3 className="text-lg font-semibold">Delivery Address</h3>
          <p className="text-sm text-gray-500">John Doe</p>
          <p className="text-sm text-gray-500">123 Main St.</p>
          <p className="text-sm text-gray-500">Anytown, USA 12345</p>
        </div>
        <div className="w-full border-t pt-4">
          <h3 className="text-lg font-semibold">Estimated Delivery Time</h3>
          <p className="text-sm text-gray-500">3-5 Business Days</p>
        </div>
        <div className="w-full border-t pt-4">
          <h3 className="mt-2 text-lg font-semibold">Delivery Method</h3>
          <p className="text-sm text-gray-500">Standard Shipping</p>
        </div>
      </Card>
    </div>
  )
}

export default CheckoutPage
