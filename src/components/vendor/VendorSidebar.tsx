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
  Server,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const VendorSidebar = () => {
  return (
    <Sidebar className="px-4 py-4 ">
      <SidebarHeader>
        <Link to={"/"} className="flex gap-x-1 items-center">
          <h2 className="text-2xl font-medium">reserva</h2>
        </Link>
      </SidebarHeader>

      <SidebarContent className="">
        <SidebarMenu className="mt-6">
          {vendorSidebarItems.map((item) => (
            <SidebarMenuItem className="pb-2 " key={item.label}>
              <SidebarMenuButton asChild>
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
                <Button variant="ghost" className="w-full justify-start">
                  <LogOut />
                  <span>Logout</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default VendorSidebar;
// dashboard, listings, calendar, services, clients, settings

const vendorSidebarItems = [
  {
    label: "Dashboard",
    url: "/vendor/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    label: "Bookings",
    url: "/vendor/bookings",
    icon: Clock,
  },
  {
    label: "Calendar",
    url: "/vendor/calendar",
    icon: CalendarIcon,
  },
  {
    label: "Services",
    url: "/vendor/services",
    icon: Server,
  },
  {
    label: "Clients",
    url: "/vendor/clients",
    icon: Users,
  },
];
