import { Person } from "@/mock/makeData";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./ui/badge";

export const columns: ColumnDef<Person>[] = [
  {
    header: "Tabela de Usuários",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "name",
        accessorFn: (row) => row.name,
        header: () => "Nome Completo",
        cell: (info) => info.getValue(),
        enableSorting: true, // Habilita ordenação
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "email",
        header: () => "Email",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "status",
        header: () => "Status",
        footer: (props) => props.column.id,
        cell: (info) => {
          return info.getValue() ? (
            <Badge variant={"success"} className="px-5 w-20 text-center">Ativo</Badge>
          ) : (
            <Badge variant={"destructive"} className="px-5 w-20 text-center">Inativo</Badge>
          );
        },
        meta: {
          filterVariant: 'select',
        },
        filterFn: (row, columnId, filterValue) => {
          if (filterValue === "all") return true; // Exibir todos
          return row.getValue(columnId) === (filterValue === "true"); // Comparação booleana
        }
      },
      {
        accessorKey: "organization",
        header: "Organização",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "createAt",
        header: "Data de Criação",
        footer: (props) => props.column.id,
      },
    ],
  }
];
