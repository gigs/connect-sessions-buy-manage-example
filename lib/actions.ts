'use server'

import { createConnectSession, findUser } from './api'
import { auth, resetUserEmail, setUserEmail } from './applicationMocks'
import { ConnectSessionParams } from './schemas/connectSession'

export const checkoutCurrentUserWithPlan = async (planId: string) => {
  const currentUser = auth.getUser()

  // Check if user already exists
  const { data: userRes } = await findUser(currentUser.email!)
  const existingUser = userRes && userRes[0]

  const userPayload = existingUser
    ? { user: existingUser.id }
    : {
        userDetails: {
          birthday: currentUser.birthday,
          email: currentUser.email,
          fullName: currentUser.fullName,
          preferredLocale: 'en-US',
        },
      }

  const connectSession: ConnectSessionParams = {
    callbackUrl: 'http://localhost:3000?error=connectSessionFailed',
    intent: {
      type: 'checkoutNewSubscription',
      checkoutNewSubscription: {
        plan: planId,
      },
    },
    ...userPayload,
  }

  return await createConnectSession(connectSession)
}

export const cancelSubscription = async (subscriptionId: string) => {
  const currentUser = auth.getUser()
  const { data: userRes } = await findUser(currentUser.email)
  const existingUser = userRes && userRes[0]

  // Since we're obtaining the user from an existing subscription, this should never happen
  if (!existingUser) {
    return { error: 'User not found' }
  }

  const connectSession: ConnectSessionParams = {
    callbackUrl: 'http://localhost:3000?error=connectSessionFailed',
    intent: {
      type: 'cancelSubscription',
      cancelSubscription: {
        subscription: subscriptionId,
      },
    },
    user: existingUser.id,
  }

  return await createConnectSession(connectSession)
}

export const changeSubscription = async (subscriptionId: string) => {
  const currentUser = auth.getUser()
  const { data: userRes } = await findUser(currentUser.email)
  const existingUser = userRes && userRes[0]

  // Since we're obtaining the user from an existing subscription, this should never happen
  if (!existingUser) {
    return { error: 'User not found' }
  }

  const connectSession: ConnectSessionParams = {
    callbackUrl: 'http://localhost:3000?error=connectSessionFailed',
    intent: {
      type: 'changeSubscription',
      changeSubscription: {
        subscription: subscriptionId,
      },
    },
    user: existingUser.id,
  }

  return await createConnectSession(connectSession)
}

export const checkoutAddon = async (
  addonId: string,
  subscriptionId: string,
) => {
  const currentUser = auth.getUser()
  const { data: userRes } = await findUser(currentUser.email)
  const existingUser = userRes && userRes[0]

  // Since we're obtaining the user from an existing subscription, this should never happen
  if (!existingUser) {
    return { error: 'User not found' }
  }

  const connectSession: ConnectSessionParams = {
    callbackUrl: 'http://localhost:3000?error=connectSessionFailed',
    intent: {
      type: 'checkoutAddon',
      checkoutAddon: {
        addons: [addonId],
        subscription: subscriptionId,
      },
    },
    user: existingUser.id,
  }

  return await createConnectSession(connectSession)
}

export const login = (formData: FormData) => {
  const email = formData.get('email') as string

  // perform an actual authentication call here
  setUserEmail(email)
}

export const logout = () => {
  resetUserEmail()
}
