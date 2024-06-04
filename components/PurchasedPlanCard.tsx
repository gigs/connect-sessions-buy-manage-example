'use client'

import { Plan } from '@/lib/schemas/plans'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { description, formatPrice } from '@/lib/formatters'

type PurchasePlanCardProps = {
  title: string
  allowances: Plan['allowances']
  price: Plan['price']
}

export const PurchasedPlanCard = ({
  title,
  allowances,
  price,
}: PurchasePlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description(allowances)}</p>
        <p>{formatPrice(price)}</p>
      </CardContent>
    </Card>
  )
}
