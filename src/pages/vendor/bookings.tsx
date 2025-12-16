import { CustomAvatar } from "@/components/shared/CustomAvatar";
import SearchInput from "@/components/shared/SearchInput";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AppointmentStatus,
  mockCalendarEvents,
  type AppointmentStatusKey,
} from "@/models/data";
import { format } from "date-fns";
import {
  EllipsisVerticalIcon,
  Eye,
  ListFilter,
  Plus,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const tableTitle = [
  { name: "Name" },
  { name: "Service Type" },
  { name: "Date" },
  { name: "Time" },
  { name: "Status" },
  { name: "" },
];
const Bookings = () => {

  return (
    <div className="grid gap-y-6 ">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-2xl pb-4">My Appointments</h1>
        <Button>
          <Plus />
          Add appointment
        </Button>
      </div>

      <div className="grid gap-y-6 border p-6 rounded-[6px]">
        <div className="flex justify-between items-center">
          <SearchInput placeholder="Search by client's or service name" />

          <Button variant={"outline"}>
            <ListFilter />
            Filter
          </Button>
        </div>

        <div className="overflow-x">
          <table className=" w-full table-auto divide-y ">
            <thead className="bg-[#F9FAFB] w-full">
              <tr>
                {tableTitle.map((title) => (
                  <th
                    scope="col"
                    key={title.name}
                    className=" whitespace-nowrap py-2 text-start px-6"
                  >
                    <span className="text-xs text-[#344054] leading-[16.2px] whitespace-nowrap font-normal">
                      {title.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y leading-6">
              {mockCalendarEvents.slice(0,8).map((appointment) => {
                const statusStyles =
                  AppointmentStatus[
                    appointment?.status as AppointmentStatusKey
                  ];
                return (
                  <tr key={appointment?.clientLastName}>
                    <td className="size-px whitespace-nowrap font-normal">
                      <div className="flex items-center gap-x-2">
                        <CustomAvatar
                          fallback={`${appointment?.clientFirstName
                            .charAt(0)
                            .toUpperCase()}`}
                          className="w-8 h-8 text-xs font-semibold"
                        />
                        <span className="text-xs text-grey-50 truncate">
                          {appointment?.clientFirstName}{" "}
                          {appointment?.clientLastName}
                        </span>
                      </div>
                    </td>

                    <td className="size-px whitespace-nowrap font-normal">
                      <div className="px-6 py-3 truncate">
                        <span className="text-xs text-grey-50 truncate">
                          {appointment?.serviceName}
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap font-normal">
                      <div className="px-6 py-3 truncate">
                        <span className="text-xs text-grey-50 truncate">
                          {appointment?.date
                            ? format(appointment?.date, "dd MMM yyyy")
                            : "-"}
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap font-normal">
                      <div className="px-6 py-3 truncate">
                        <span className="text-xs text-grey-50 truncate">
                          {format(new Date(appointment?.startTime), "hh:mm a")}{" "}
                          - {format(new Date(appointment?.endTime), "hh:mm a")}
                        </span>
                      </div>
                    </td>

                    <td className="size-px whitespace-nowrap font-normal">
                      <div className="px-6 py-3 truncate">
                        <span className="text-[10px] text-grey-50 truncate">
                          <div
                            className="rounded-[50px] w-fit px-2 text-[10px] capitalize"
                            style={{
                              backgroundColor: statusStyles?.bgColor,
                              color: statusStyles.color,
                            }}
                          >{`${appointment?.status.toLowerCase()}`}</div>
                        </span>
                      </div>
                    </td>

                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-1.5">
                        <Popover>
                          <PopoverTrigger asChild>
                            <EllipsisVerticalIcon className="size-4 text-[rgba(71,83,103,1)] cursor-pointer" />
                          </PopoverTrigger>

                          <PopoverContent className="flex flex-col gap-y-2 px-2.5 py-4 w-full rounded-lg max-w-[300px]! min-w-[180px] shadow-lg bg-white transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0">
                            <Link
                              to={`/vendor/bookings/${appointment?.id}`}
                              className="flex items-center gap-x-1.5 text-xs hover:bg-muted  py-2 px-3 rounded-md text-base-grey"
                            >
                              <Eye className="" size={16} />
                              View
                            </Link>
                            {appointment?.status === "UPCOMING" && (
                              <Link
                                to={""}
                                className="flex items-center gap-x-1.5 text-xs hover:bg-muted  py-2 px-3 rounded-md text-base-grey"
                              >
                                <X size={16} />
                                Cancel appointment
                              </Link>
                            )}
                          </PopoverContent>
                        </Popover>
                      </div>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
