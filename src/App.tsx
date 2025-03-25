import { UserTable } from "./components/user-table"

function App() {
  return (
    <div className="container mx-auto py-10 bg-[var(--background)]">
      <h1 className="text-2xl font-bold mb-5">Users</h1>
      <div className="bg-gray-200">
      <UserTable/>
      </div>
    </div>
  )
}

export default App
