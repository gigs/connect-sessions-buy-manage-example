"use client";

import { PlusCircle, Replace, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { cancelSubscription, changeSubscription } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { PurchaseAddonDialog } from "./PurchaseAddonDialog";
import { Addon } from "@/lib/schemas/addon";

type ManagePlanActionsProps = {
  subscriptionId: string;
  addons: Addon[];
};

export const ManagePlanActions = ({
  subscriptionId,
  addons,
}: ManagePlanActionsProps) => {
  const router = useRouter();

  const handleCancelClick = async () => {
    const session = await cancelSubscription(subscriptionId);

    if (session?.url) {
      router.push(session.url);
    }
  };

  const handleChangeClick = async () => {
    const sessiont = await changeSubscription(subscriptionId);

    if (sessiont?.url) {
      router.push(sessiont.url);
    }
  };

  return (
    <>
      <PurchaseAddonDialog addons={addons} subscriptionId={subscriptionId} />
      <Button
        variant="ghost"
        className="text-neutral-700 flex items-center gap-2"
        onClick={handleChangeClick}
      >
        <Replace className="h-4 w-4" />
        Change Plan
      </Button>
      <Button
        onClick={handleCancelClick}
        variant="ghost"
        className="text-rose-500 flex items-center gap-2"
      >
        <Trash className="h-4 w-4" />
        Cancel Plan
      </Button>
    </>
  );
};
