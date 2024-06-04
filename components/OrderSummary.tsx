import { Card } from '@/components/ui/card'
import Image from 'next/image'

export const OrderSummary = () => {
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
