import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { PlusCircle, Replace, Trash } from "lucide-react";
import { Subscription } from "@/lib/schemas/subscription";
import { Progress } from "./ui/progress";
import { description, formatPrice } from "@/lib/formatters";
import { ManagePlanActions } from "./ManagePlanActions";
import { getAddons } from "@/lib/api";

type ManagePlanCardProps = {
  subscription: Subscription;
};

export const ManagePlanCard = async ({ subscription }: ManagePlanCardProps) => {
  const addons = await getAddons(subscription.plan.provider);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{subscription.plan.name}</CardTitle>
        <CardDescription>
          {formatPrice(subscription.plan.price)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>{description(subscription.plan.allowances)}</p>
        {subscription.plan.allowances.dataBytes !== null && (
          <div className="flex items-center w-full">
            <Progress value={60} />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t py-4">
        <ManagePlanActions subscriptionId={subscription.id} addons={addons} />
      </CardFooter>
    </Card>
  );
};
