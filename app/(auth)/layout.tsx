// app/(auth)/layout.tsx
import { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const layout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  // If the user IS authenticated, redirect them to home (they shouldn't see sign-in/up)
  if (isUserAuthenticated) redirect('/');

  // Otherwise, show the auth page (sign-in/up)
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default layout