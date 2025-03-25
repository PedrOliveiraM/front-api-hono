import { UserLogin } from "@/@types/user/user-login";
import vite from "@/assets/vite.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { Building, Building2, Edit, List, Plus, Search, Trash, User } from "lucide-react";
import { NavUser } from "./sidebar-footer";
import { SidebarOption } from "./sidebar-option";


const userFunctions = [
  {
    title: "Criar Relação",
    url: "/user/create-user",
    icon: Plus,
  },
  {
    title: "Listar",
    url: "/user/list-user",
    icon: List,
  },
  {
    title: "Buscar por Id",
    url: "/user/list-user-id",
    icon: Search,
  },
  {
    title: "Atualizar",
    url: "/user/update-user",
    icon: Edit,
  },
  {
    title: "Deletar",
    url: "/user/delete-user",
    icon: Trash,
  }
]

const userOrganizationFunctions = [
  {
    title: "Criar Relação",
    url: "",
    icon: Plus,
  },
  {
    title: "Listar",
    url: "#",
    icon: List,
  },
  {
    title: "Buscar por Id",
    url: "#",
    icon: Search,
  },
  {
    title: "Atualizar",
    url: "#",
    icon: Edit,
  },
  {
    title: "Deletar",
    url: "#",
    icon: Trash,
  }
]

const OrganizationFunctions = [
  {
    title: "Criar Relação",
    url: "#",
    icon: Plus,
  },
  {
    title: "Listar",
    url: "#",
    icon: List,
  },
  {
    title: "Buscar por Id",
    url: "#",
    icon: Search,
  },
  {
    title: "Atualizar",
    url: "#",
    icon: Edit,
  },
  {
    title: "Deletar",
    url: "#",
    icon: Trash,
  }
]

const options = [
  {
    title: "Usuário",
    icon: User,
    functions: userFunctions,
  },
  {
    title: "Organização",
    icon: Building,
    functions: OrganizationFunctions,
  },
  {
    title: "Relação",
    icon: Building2,
    functions: userOrganizationFunctions,
  }
]

const user: UserLogin = {
  name: "Pedro Monteiro",
  email: "pedro@monteirodev.com",
  avatar: "https://github.com/PedrOliveiraM.png"
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl mb-5">
            <a href="/">
              <div className="flex gap-3 m-5">
                <img src={vite} alt="Logo" className="w-10 h-10" />
                Aplicação
              </div>
            </a>
          </SidebarGroupLabel>
          <div className="flex flex-col gap-2">
            {options.map((option, index) => <SidebarOption key={index} icon={option.icon} functions={option.functions} title={option.title} />)}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
