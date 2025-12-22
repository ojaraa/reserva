import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { CustomAvatar } from "./shared/CustomAvatar";
import ClientSidebar from "./client/ClientSidebar";

const ClientDashboardLayout = () => {
  return (
     <SidebarProvider>
      <ClientSidebar />
      <main className="min-h-screen w-full bg-[#fdfdfe]">
        <div className="flex  justify-between items-center p-4 border-b ">
          <SidebarTrigger />
          <CustomAvatar src="" fallback="OJ" className="cursor-pointer font-semibold" />
        </div>
        <div className="p-6">
       <Outlet />
        </div>

 
      </main>
    </SidebarProvider>
  )
}
// 

export default ClientDashboardLayout