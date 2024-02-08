import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Smartphone, User2 } from "lucide-react";
import Image from "next/image";
import { getSubscriptionsByUser } from "@/lib/api";
import { ManagePlanCard } from "@/components/ManagePlanCard";

export default async function BackOfficePage() {
  const subscriptions = await getSubscriptionsByUser(
    process.env.GIGS_MANAGABLE_USER_ID!
  );

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Image
              alt="Company Logo"
              className="h-6 w-auto"
              height={20}
              src="/tigr-logo.webp"
              width={100}
            />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <User2 className="h-4 w-4" />
                Profile
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Smartphone className="h-4 w-4" />
                Devices
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <Phone className="h-4 w-4" />
                Phone Plans
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-white px-6 dark:bg-gray-800/40"></header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-gray-50">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Phone Plans</h1>
            <Button className="ml-auto" size="sm">
              Add Plan
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {subscriptions.map((subscription) => (
              <ManagePlanCard
                key={subscription.id}
                subscription={subscription}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
