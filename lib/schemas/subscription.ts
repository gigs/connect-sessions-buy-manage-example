import { ElementOf } from '../utils'
import { Plan } from './plans'
import { Porting } from './porting'
import { Sim } from './sim'
import { User } from './users'

export type Subscription = {
  object: 'subscription'
  id: string
  currentPeriod: {
    number: number
    start: string
    end: string
  } | null
  phoneNumber: string | null
  plan: Plan
  sim: Sim | null
  status: SubscriptionStatus
  user: User
  activatedAt: string | null
  canceledAt: string | null
  createdAt: string
  endedAt: string | null
  firstUsageAt: string | null
  porting: Porting | null
}

const validSubscriptionStatuses = ['pending', 'active', 'ended'] as const

type SubscriptionStatus = ElementOf<typeof validSubscriptionStatuses>

