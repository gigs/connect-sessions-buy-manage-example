export type ConnectSession = {
  object: 'connectSession'
  id: string
  callbackUrl: string
  intent: {
    type:
      | 'cancelSubscription'
      | 'changeSubscription'
      | 'checkoutAddon'
      | 'checkoutNewSubscription'
      | 'completePorting'
      | 'resumeSubscription'
      | 'updatePaymentMethod'
      | 'updateUserAddress'
      | 'updateUserFullName'
      | 'viewEsimInstallation'
      | 'viewSubscription'
      | 'viewSubscriptions'
    cancelSubscription?: {
      subscription: string
    }
    changeSubscription?: {
      subscription: string
    }
    checkoutAddon?: {
      addons: string[]
      subscription: string
    }
    checkoutNewSubscription?: {
      addons?: string[]
      device?: string
      plan: string
      sim?: string
    }
    completePorting?: {
      subscription: string
    }
    resumeSubscription?: {
      subscription: string
    }

    viewEsimInstallation?: {
      subscription: string
    }
    viewSubscription?: {
      subscription: string
    }
  }
  user?: string
}

export type ConnectSessionResponse = ConnectSession & {
  url: string
}

export type ConnectSessionParams = Omit<ConnectSession, 'object' | 'id'> & {
  userDetails?: {
    email: string
    fullName?: string
    preferredLocale?: string
    birthday?: string
  }
}
