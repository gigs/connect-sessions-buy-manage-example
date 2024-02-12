import prettyBytes from 'pretty-bytes'
import { Plan } from './schemas/plans'

export const formatPrice = (price: Plan['price']) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
  }).format(price.amount / 100)
}

export const description = (allowances: Plan['allowances']) => {
  const dataString =
    allowances.dataBytes === null
      ? 'Unlimited Data'
      : prettyBytes(allowances.dataBytes)

  const smsString =
    allowances.smsMessages === null
      ? 'Unlimited SMS'
      : `${allowances.smsMessages} SMS`

  const voiceString =
    allowances.voiceSeconds === null
      ? 'Unlimited Voice'
      : `${allowances.voiceSeconds / 60 / 60} Hours Voice`

  return `${dataString} - ${smsString} - ${voiceString}`
}
