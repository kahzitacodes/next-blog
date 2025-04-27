'use client'
import { Empty } from '@/components/empty'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <Empty
      title="Oops!"
      description="Page not found"
      button={{
        children: 'Back to home',
        onClick: () => router.push('/')
      }}
    />
  )
}
