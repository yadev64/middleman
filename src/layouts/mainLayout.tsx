import { SidebarComponent } from "@/customComponents/sidebarComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom";
export function MainLayout() {
  return (
      <>
          
          <header className="border-b h-14 flex items-center px-6">
          <h1 className="text-xl font-semibold"> middleman</h1>
        </header>
      <div className="flex flex-col min-h-screen w-full">
        

        <div className="flex flex-1">
          <SidebarProvider>
            <SidebarComponent />
            <SidebarTrigger />
            <main className="flex-1 p-6">
              <Outlet />
            </main>
          </SidebarProvider>
        </div>
      </div>
    </>
  );
}
