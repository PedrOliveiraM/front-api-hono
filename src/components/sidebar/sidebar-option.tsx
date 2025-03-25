import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDown, LucideProps } from "lucide-react";
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

type Function = {
  title: string;
  url: string;
  icon: React.FC<LucideProps>;
};

interface SidebarOptionProps {
  title: string;
  icon: React.FC<LucideProps>;
  functions: Function[];
}

export function SidebarOption({ title, icon: Icon, functions }: SidebarOptionProps) {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroupLabel asChild>
        <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5" />
            <span className="text-sm">{title}</span>
          </div>
          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {functions.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex items-center gap-2 pl-5">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  );
}
