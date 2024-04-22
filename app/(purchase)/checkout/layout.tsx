import { auth } from '@/lib/applicationMocks'
import { LoginForm } from '@/components/LoginForm'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const currentUser = auth.getUser()
  return currentUser.email ? <>{children}</> : <LoginForm />
}

export default Layout
