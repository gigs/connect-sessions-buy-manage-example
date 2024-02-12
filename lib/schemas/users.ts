export type User = {
  object: 'user'
  id: string
  birthday: string | null
  email: string
  emailVerified: boolean
  fullName: string | null
  preferredLocale: string
  createdAt: string
}
