import { PlanCard } from "@/components/PlanCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UserCircle } from "lucide-react";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col bg-[#f2f2f2] min-h-screen">
      <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 shadow-md">
        <Image
          alt="Company Logo"
          className="h-6 w-auto"
          height={20}
          src="/tigr-logo.webp"
          width={100}
        />
        <div className="flex items-center gap-2">
          <div className="text-gray-700 dark:text-gray-300 flex gap-2">
            <UserCircle />
            John Doe
          </div>
        </div>
      </header>
      <main className="max-w-6xl px-4 mx-auto py-6 ">
        <h1 className="text-3xl font-bold text-center mt-6 mb-24">
          Order successfully submitted 🎉
        </h1>
        <div className="grid md:grid-cols-[2fr_1fr] gap-24 items-start">
          <div className="grid gap-4 md:gap-10 items-start ">
            <h2 className="font-bold text-2xl">Order Details</h2>
            <div className="flex items-center">
              <Image
                alt="User Avatar"
                className="w-24 drop-shadow-xl"
                height={80}
                src="/iphone.png"
                style={{
                  objectFit: "contain",
                }}
                width={40}
              />
              <div className="ml-12 text-left flex items-start flex-col">
                <h1 className="font-bold text-xl text-center">
                  Acme Smartphone
                </h1>
                <p className="text-sm text-gray-500 text-center">
                  128GB Storage
                </p>
                <p className="text-sm text-gray-500 text-center">
                  Midnight Black
                </p>
                <p className="text-sm text-gray-500 text-center">eSIM + pSIM</p>
                <h2 className="font-semibold text-lg md:text-xl mt-2 text-center">
                  $699
                </h2>
              </div>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg">Delivery Address</h3>
              <p className="text-sm text-gray-500">John Doe</p>
              <p className="text-sm text-gray-500">123 Main St.</p>
              <p className="text-sm text-gray-500">Anytown, USA 12345</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg">Estimated Delivery Time</h3>
              <p className="text-sm text-gray-500">3-5 Business Days</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mt-2">Delivery Method</h3>
              <p className="text-sm text-gray-500">Standard Shipping</p>
            </div>
          </div>
          <div className="grid gap-4 md:gap-10 items-start">
            <h2 className="font-bold text-2xl">Add a phone plan?</h2>
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <PlanCard
                    title="Unlimited Plan"
                    description="Unlimited talk, text, and data for $50/month"
                  />
                </CarouselItem>
                <CarouselItem>
                  <PlanCard
                    title="Basic Plan"
                    description="500 minutes, 500 texts, 500MB data for $20/month"
                  />
                </CarouselItem>
                <CarouselItem>
                  <PlanCard
                    title="Family Plan"
                    description="Unlimited talk, text, and data for 4 lines for
                    $150/month"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
