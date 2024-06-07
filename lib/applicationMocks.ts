import { cookies } from 'next/headers'

const loginCookie = 'connect_session_example_user'

export const setUserEmail = (email: string) =>
  cookies().set(loginCookie, email, { maxAge: 3600 * 24 })
export const getUserEmail = () => cookies().get(loginCookie)?.value ?? ''
export const resetUserEmail = () => cookies().delete(loginCookie)

export const auth = {
  getUser: () => ({
    email: getUserEmail(),
    birthday: '1991-07-22',
    fullName: 'John Doe',
  }),
}
