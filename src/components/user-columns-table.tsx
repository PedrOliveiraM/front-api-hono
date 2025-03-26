import { UserOrganizationDto } from "@/@types/user-organization/user-organization-dto";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "./ui/badge";

export const columns: ColumnDef<UserOrganizationDto>[] = [
  {
    header: "Tabela de Usuários",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "userName",
        accessorFn: (row) => row.userName,
        header: () => "Nome Completo",
        cell: (info) => info.getValue(),
        enableSorting: true,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "email",
        header: () => "Email",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "isActive",
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
        accessorKey: "organizationName",
        header: "Organização",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "createdAt",
        header: "Data de Criação",
        footer: (props) => props.column.id,
        cell: (info) => {
          const date = new Date(info.getValue());
          return format(date, "dd/MM/yyyy");
        }
      },
    ],
  }
];
