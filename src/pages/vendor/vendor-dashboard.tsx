import { CustomAvatar } from "@/components/shared/CustomAvatar";
import { EllipsisVerticalIcon } from "lucide-react";

const VendorDashboard = () => {
  const tableTitle = [
    { name: "Name" },
    { name: "Email Adress" },
    { name: "Service Type" },
    { name: "Date" },
    { name: "Time" },
    { name: "" },
  ];
  return (
    <div className="grid gap-y-6">
      {/* <div className="grid gap-y-1.5">
        <h2 className="text-2xl font-medium">Good morning, Ojara</h2>
        <p className="">
          Here is what is happening with your store today.
        </p>
      </div> */}

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-1 p-4 bg-white rounded-lg shadow">
          <h3 className="text font-medium mb-2">Upcoming Appointments</h3>
          <p className="text-2xl font-semibold">10</p>
        </div>

        <div className="col-span-3 md:col-span-1 p-4 bg-white rounded-lg shadow">
          <h3 className="text font-medium mb-2">Total Bookings this week</h3>
          <p className="text-2xl font-semibold">15</p>
        </div>

        <div className="col-span-3 md:col-span-1 p-4 bg-white rounded-lg shadow">
          <h3 className="text font-medium mb-2">Upcoming Appointments</h3>
          <p className="text-2xl font-semibold">10</p>
        </div>
      </div>

      <div className="grid  bg-white rounded-lg ">
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
              {appointments.map((appointment) => (
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
    date: "2025-02-10",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    status: "Completed",
  },
  {
    firstName: "Emily",
    lastName: "Carter",
    email: "emilyc@example.com",
    serviceType: "Hair Styling",
    date: "2025-02-11",
    startTime: "1:30 PM",
    endTime: "2:30 PM",
    status: "Pending",
  },
  {
    firstName: "Olivia",
    lastName: "Bennett",
    email: "oliviab@example.com",
    serviceType: "Manicure",
    date: "2025-02-14",
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
