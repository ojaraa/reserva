import QuickActions from "@/components/QuickActions";
import { CustomAvatar } from "@/components/shared/CustomAvatar";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
import DashboardStatsCard from "@/components/vendor/DashboardStatsCard";
import {
  Bell,
  Calendar,
  Check,
  Clock,
  List,
  PlusCircle,
  // EllipsisVerticalIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  // const tableTitle = [
  //   { name: "Name" },
  //   { name: "Email Adress" },
  //   { name: "Service Type" },
  //   { name: "Date" },
  //   { name: "Time" },
  //   { name: "" },
  // ];

  const today = new Date().toISOString().split("T")[0];
  const todaysAppointment = appointments.filter(
    (appointment) => appointment?.date === today
  );

  console.log(new Date().toISOString());

  return (
    <div className="grid gap-y-6 bg-slate-50">
      <div>
        <h1 className="text-2xl font-bold ">Welcome back, Ojara</h1>
        <p className="text-slate-500 mt-1">
          Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <DashboardStatsCard {...stat} />
        ))}
      </div>

      {/* <div className="grid  bg-white rounded-lg ">
        <h2 className="pb-4">Upcoming Appointments</h2>
        <div className="overflow-x">
          <table className=" w-full table-auto divide-y ">
            <thead className="bg-[#F9FAFB]  w-full">
              <tr className="bg-[#F9FAFB] ">
                {tableTitle.map((title) => (
                  <th
                    scope="col"
                    key={title.name}
                    className=" whitespace-nowrap py-3 text-start px-6"
                  >
                    <span className="text-xs text-[#344054] leading-[16.2px] whitespace-nowrap font-normal">
                      {title.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y leading-6">
              {todaysAppointment.map((appointment) => (
                <tr key={appointment?.lastName}>
                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="flex items-center gap-x-2">
                      <CustomAvatar
                        fallback={`${appointment?.firstName
                          .charAt(0)
                          .toUpperCase()}${appointment?.lastName
                          .charAt(0)
                          .toUpperCase()}`}
                        className="w-8 h-8 text-xs font-semibold"
                      />
                      <span className="text-xs text-grey-50 truncate">
                        {appointment?.firstName} {appointment?.lastName}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        {appointment?.email}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        {appointment?.serviceType}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        {appointment?.date}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        {appointment?.startTime} - {appointment?.endTime}
                      </span>
                    </div>
                  </td>

                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-1.5">
                      <EllipsisVerticalIcon className="size-4 text-[rgba(71,83,103,1)] cursor-pointer" />
                    </div>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Today's Upcoming Appointments</h3>
            <Link
              to="/vendor/calendar"
              className="text-primary-blue font-medium text-sm"
            >
              View Calendar
            </Link>
          </div>

          <div className="divide-y divide-slate-50">
            {todaysAppointment?.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-80  gap-3 px-6 md:px-40 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                  <Calendar size={22} />
                </div>
                <h3 className="text-lg font-semibold">No appointments today</h3>

                <p className="text-sm text-muted-foreground">
                  You’re all caught up for today. Upcoming and past bookings are
                  available in your full calendar.
                </p>
                

                <Link
                  to={"/vendor/bookings"}
                  className="text-primary-blue hover:font-bold transistion-colors transistion-ease-in-out"
                >
                  <Button className="px-7 py-5">View all bookings</Button>
                </Link>
              </div>
            ) : (
              todaysAppointment.map((appointment) => (
                <div className="p-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <CustomAvatar
                      fallback={`${appointment?.firstName
                        .charAt(0)
                        .toUpperCase()}${appointment?.lastName
                        .charAt(0)
                        .toUpperCase()}`}
                      className="w-12 h-12 text-xs font-semibold"
                    />
                    <div>
                      <p className="font-bold text-slate-900">
                        {appointment?.firstName} {appointment?.lastName}
                      </p>
                      <p className="text-sm text-slate-500">
                        {appointment.serviceType}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold">
                      {appointment?.startTime} - {appointment?.endTime}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 text-center">
            {todaysAppointment?.length > 0 && (
              <Link
                to={"/vendor/bookings"}
                className="text-primary-blue hover:font-bold transistion-colors transistion-ease-in-out"
              >
                View all bookings
              </Link>
            )}
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 gap-3">
            <QuickActions
              icon={<Clock size={18} />}
              label="Set availability"
              description="Update your working hours"
              primaryColor="text-primary-blue"
            />
            <QuickActions
              icon={<Calendar size={18} />}
              label="View calendar"
              description="Full schedule overview"
              primaryColor="text-primary-blue"
              href="/vendor/calendar"
            />
            <QuickActions
              icon={<PlusCircle size={18} />}
              label="Add a service"
              description="Create a new offering"
              primaryColor="text-primary-blue"
              href="/vendor/services"
            />
            <QuickActions
              icon={<List size={18} />}
              label="View all bookings"
              description="Search history & upcoming"
              primaryColor="text-primary-blue"
              href="/vendor/bookings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;

const appointments = [
  {
    firstName: "Sophia",
    lastName: "Johnson",
    email: "sophiaj@example.com",
    serviceType: "Facial Treatment",
    date: "2026-01-15",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    status: "Completed",
  },
  {
    firstName: "Emily",
    lastName: "Carter",
    email: "emilyc@example.com",
    serviceType: "Hair Styling",
    date: "2026-01-15",
    startTime: "1:30 PM",
    endTime: "2:30 PM",
    status: "Pending",
  },
  {
    firstName: "Olivia",
    lastName: "Bennett",
    email: "oliviab@example.com",
    serviceType: "Manicure",
    date: "2026-01-15",
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    status: "Accepted",
  },
  {
    firstName: "Ava",
    lastName: "Thompson",
    email: "avathompson@example.com",
    serviceType: "Pedicure",
    date: "2025-02-15",
    startTime: "11:45 AM",
    endTime: "12:45 PM",
    status: "Declined",
  },
  {
    firstName: "Chloe",
    lastName: "Mitchell",
    email: "chloemitchell@example.com",
    serviceType: "Body Massage",
    date: "2025-02-16",
    startTime: "4:00 PM",
    endTime: "5:00 PM",
    status: "Completed",
  },
  {
    firstName: "Grace",
    lastName: "Adams",
    email: "gracea@example.com",
    serviceType: "Makeup Session",
    date: "2025-02-18",
    startTime: "9:15 AM",
    endTime: "10:15 AM",
    status: "Pending",
  },
  {
    firstName: "Harper",
    lastName: "Evans",
    email: "harperevans@example.com",
    serviceType: "Hair Coloring",
    date: "2025-02-19",
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    status: "Accepted",
  },
  {
    firstName: "Lily",
    lastName: "Turner",
    email: "lilyturner@example.com",
    serviceType: "Lash Extension",
    date: "2025-02-20",
    startTime: "12:30 PM",
    endTime: "1:30 PM",
    status: "Completed",
  },
];

const stats = [
  {
    label: "Today's Booking",
    value: "12",
    subtext: "4 completed",
    icon: <Clock className="w-5 h-5" />,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    label: "Upcoming (This Week)",
    value: "48",
    subtext: "+12% from last week",
    icon: <Calendar className="w-5 h-5" />,
    iconColor: "text-primary-blue",
    iconBg: "bg-indigo-50",
  },
  {
    label: "Availability Status",
    value: "Available today",
    subtext: "4 slots remaining",
    icon: <Check className="w-5 h-5" />,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    isStatus: true,
  },
  {
    label: "Pending Requests",
    value: "7",
    subtext: "Needs your attention",
    icon: <Bell className="w-5 h-5" />,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
];
