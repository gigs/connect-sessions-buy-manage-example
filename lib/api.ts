import { auth } from './applicationMocks'
import { Addon } from './schemas/addon'
import {
  ConnectSessionParams,
  ConnectSessionResponse,
} from './schemas/connectSession'
import { Plan } from './schemas/plans'
import { Subscription } from './schemas/subscription'
import { User } from './schemas/users'

const baseUrl = `https://api.gigs.com/projects/${process.env.GIGS_PROJECT}/`
const fetchUrl = (path: string) => `${baseUrl}/${path}`

const headers = new Headers({
  Authorization: `Bearer ${process.env.GIGS_API_KEY}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
  cache: 'no-cache',
})

type ApiCollectionResponse<T> = {
  error?: string
  data?: T[]
}

type ApiItemResonse<T> = {
  error?: string
  data?: T
}

export const getPlans = async (): Promise<ApiCollectionResponse<Plan>> => {
  const response = await fetch(fetchUrl('plans'), {
    headers,
  })

  const data = await response.json()

  if (response.status !== 200) {
    return {
      error: data.message,
    }
  }

  return { data: data.items }
}

export const getSubscriptionsByUser = async (): Promise<
  ApiCollectionResponse<Subscription>
> => {
  const currentUser = auth.getUser()
  const { error: userError, data: userData } = await findUser(
    currentUser.email!,
  )

  if (userError || !userData || userData?.length === 0) {
    return { error: 'User not found' }
  }

  const existingUser = userData[0]
  const userId = existingUser.id

  const response = await fetch(
    fetchUrl(`subscriptions?user=${userId}&status=active`),
    {
      headers,
    },
  )

  const data = await response.json()
  if (response.status !== 200) {
    return {
      error: data.message,
    }
  }

  return { data: data.items }
}

export const findUser = async (
  email: string,
): Promise<ApiCollectionResponse<User>> => {
  const response = await fetch(fetchUrl('users/search'), {
    headers,
    method: 'POST',
    body: JSON.stringify({ email: email }),
  })

  const data = await response.json()

  if (response.status !== 200) {
    return {
      error: data.message,
    }
  }

  return { data: data.items }
}

export const getAddons = async (
  provider: string,
): Promise<ApiCollectionResponse<Addon>> => {
  const response = await fetch(
    fetchUrl(`addons?status=available&provider=${provider}`),
    {
      headers,
    },
  )

  const data = await response.json()

  if (response.status !== 200) {
    return {
      error: data.message,
    }
  }

  return { data: data.items }
}

export const createConnectSession = async (
  connectSession: ConnectSessionParams,
): Promise<ApiItemResonse<ConnectSessionResponse>> => {
  const options: RequestInit = {
    method: 'POST',
    headers,
    body: JSON.stringify(connectSession),
    cache: 'no-store', // Make sure we do not cache Connect Sessions as they're single use only
  }

  const response = await fetch(fetchUrl('connectSessions'), options)
  const data = await response.json()

  if (response.status !== 200) {
    console.error(data)
    return {
      error: data.message,
    }
  }

  return { data }
}
