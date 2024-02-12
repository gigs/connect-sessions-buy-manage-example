import { ElementOf } from '../utils'
import { Price } from './price'
import { SimProvider } from './sim'

export type Addon = {
  object: 'addon'
  id: string
  name: string
  status: AddonStatus
  type: AddonType
  price: Price
  description: string | null
  recurrenceType: AddonRecurrenceType
  allowances: {
    dataBytes: number | null
    voiceSeconds: number | null
    smsMessages: number | null
  }
  provider: SimProvider
  createdAt: string
  validity: AddonValidity | null
}

export type AddonValidity = {
  unit: DurationUnitType
  value: number
}

export const validAddonStatuses = ['draft', 'available', 'archived'] as const
export type AddonStatus = ElementOf<typeof validAddonStatuses>

export const addonType = ['topUp', 'other'] as const
export type AddonType = (typeof addonType)[number]

export const durationUnitType = ['day', 'month'] as const
export const addonRecurrenceType = ['oneTime', 'recurring'] as const

export type DurationUnitType = (typeof durationUnitType)[number]
export type AddonRecurrenceType = (typeof addonRecurrenceType)[number]
