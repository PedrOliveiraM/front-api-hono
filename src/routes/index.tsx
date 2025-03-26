import { DataTable } from '@/components/data-table';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <DataTable />
}