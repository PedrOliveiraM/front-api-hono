import { UserForm } from '@/components/userForm/UserForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/update-user/$id')({
  component: UpdateUser,
})

function UpdateUser() {
  return (
    <div className="flex justify-center items-center">
      <UserForm />
    </div>
  )
}
