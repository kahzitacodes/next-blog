'use client'
import { Empty } from '@/components/empty'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <Empty
      title="There is nothing here"
      description="Post not found"
      button={{
        children: 'Back to posts',
        onClick: () => router.push('/posts')
      }}
    />
  )
}
