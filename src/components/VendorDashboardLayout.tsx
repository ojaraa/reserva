import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import VendorSidebar from "./vendor/VendorSidebar";
import { Outlet } from "react-router-dom";
import { CustomAvatar } from "./shared/CustomAvatar";

const VendorDashboardLayout = () => {
  return (
    <SidebarProvider>
      <VendorSidebar />
      <main className="min-h-screen w-full ">
        <div className="flex bg-white  justify-between items-center p-4 border-b sticky top-0 z-10">
          <SidebarTrigger />
          <CustomAvatar src="" fallback="OJ" className="cursor-pointer font-semibold" />
        </div>
        <div className="p-6 bg-slate-50">
       <Outlet />
        </div>

 
      </main>
    </SidebarProvider>
  );
};

export default VendorDashboardLayout;
