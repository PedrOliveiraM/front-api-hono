import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/app-sidebar";
import { Toaster } from "./ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="flex justify-center items-center min-h-screen p-5 w-full">
        <div className="w-full max-w-5xl overflow-auto">{children}</div>
      </main>
      <Toaster position="top-right" richColors />
    </SidebarProvider>
  );
}
