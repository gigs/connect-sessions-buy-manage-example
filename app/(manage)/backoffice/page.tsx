import { Button } from "@/components/ui/button";
import { getSubscriptionsByUser } from "@/lib/api";
import { ManagePlanCard } from "@/components/ManagePlanCard";
import { SideNav } from "@/components/SideNav";

export default async function BackOfficePage() {
  const subscriptions = await getSubscriptionsByUser();

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40">
        <SideNav />
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-gray-50">
          <Header />
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

const Header = () => {
  return (
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">Phone Plans</h1>
      <Button className="ml-auto" size="sm">
        Add Plan
      </Button>
    </div>
  );
};
