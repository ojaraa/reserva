import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalendarIcon,
  Clock,
  LayoutDashboardIcon,
  LogOut,
  Star,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { MdBusiness } from "react-icons/md";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase.config";
import DeleteConfirmation from "../shared/DeleteConfirmation";

const ClientSidebar = () => {
      const location = useLocation();
    
      const isActive = (path: string) => {
        return location.pathname === path;
      };

       const handleLogout = async () => {
          try {
            await signOut(auth);
          } catch (error) {
            console.log(error);
          }
        };
  return (
     <Sidebar className="px-4 py-4 ">
      <SidebarHeader>
        <Link to={"/"} className="flex gap-x-1 items-center">
          <h2 className="text-2xl font-medium">reserva</h2>
        </Link>
      </SidebarHeader>

      <SidebarContent className="">
        <SidebarMenu className="mt-6">
          {clientSidebarItems.map((item) => (
            <SidebarMenuItem className="pb-2 " key={item.label}>
              <SidebarMenuButton asChild className={`${isActive(item.url) && "bg-[#e9e9f7] text-sidebar-accent-foreground"}`}>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu>
            {/* <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to={"/settings"}>
                  <Settings />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem> */}

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="ghost" className="w-full justify-start">
                                      <LogOut />
                                      <span>Logout</span>
                                    </Button>
                                  </AlertDialogTrigger>
                
                                  <DeleteConfirmation
                                    description="Are you sure you want to logout?"
                                    title="Logout"
                                    handleDelete={handleLogout}
                                    buttonText="Logout"
                                  />
                                </AlertDialog>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}

export default ClientSidebar

const clientSidebarItems = [
  {
    label: "Dashboard",
    url: "/client/dashboard",
    icon: LayoutDashboardIcon,
  },
    {
    label: "Vendors",
    url: "/client/vendors",
    icon: MdBusiness,
  },
  {
    label: "My Appointments",
    url: "/client/appointments",
    icon: Clock,
  },
  {
    label: "Calendar",
    url: "/client/calendar",
    icon: CalendarIcon,
  },

  {
    label: "Favourites",
    url: "/client/favorites",
    icon: Star,
  }

];