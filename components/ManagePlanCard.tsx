import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Subscription } from '@/lib/schemas/subscription'
import { description, formatPrice } from '@/lib/formatters'
import { ManagePlanActions } from './ManagePlanActions'
import { getAddons } from '@/lib/api'

type ManagePlanCardProps = {
  subscription: Subscription
}

export const ManagePlanCard = async ({ subscription }: ManagePlanCardProps) => {
  const { data: addons } = await getAddons(subscription.plan.provider)

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
      </CardContent>
      <CardFooter className="flex justify-between border-t py-4">
        <ManagePlanActions
          subscriptionId={subscription.id}
          addons={addons || []}
        />
      </CardFooter>
    </Card>
  )
}
