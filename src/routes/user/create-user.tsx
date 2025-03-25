import { UserForm } from '@/components/userForm/UserForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/create-user')({
  component: CreateUser,
})

function CreateUser() {
  return (
    <div className="flex justify-center items-center">
      <UserForm />
    </div>
  )
}