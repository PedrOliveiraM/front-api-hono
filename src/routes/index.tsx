import { UserTable } from '@/components/user-table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <UserTable />
  )
}