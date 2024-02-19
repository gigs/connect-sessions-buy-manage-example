'use client'

import { Plan } from '@/lib/schemas/plans'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { checkoutCurrentUserWithPlan } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { description, formatPrice } from '@/lib/formatters'

type PurchasePlanCardProps = {
  title: string
  allowances: Plan['allowances']
  price: Plan['price']
  planId: string
}

export const PurchasePlanCard = ({
  title,
  allowances,
  price,
  planId,
}: PurchasePlanCardProps) => {
  const router = useRouter()

  const handleClick = async (planId: string) => {
    const { data: session, error } = await checkoutCurrentUserWithPlan(planId)

    if (error) {
      // Do error handling here
    }

    if (session?.url) {
      router.push(session.url)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description(allowances)}</p>
        <p>{formatPrice(price)}</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="default" onClick={() => handleClick(planId)}>
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
