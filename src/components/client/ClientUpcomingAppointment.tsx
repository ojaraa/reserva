import { ClockIcon } from "lucide-react";
import { Button } from "../ui/button";
import { IoMdBusiness } from "react-icons/io";
import { mockCalendarEvents } from "@/models/data";
import { format } from "date-fns";

const ClientUpcomingAppointment = () => {
  const filteredUpcomingAppointments = mockCalendarEvents.filter(
    (appointment) =>
      appointment.date >= new Date().toISOString() &&
      appointment.status === "UPCOMING"
  );
  console.log(filteredUpcomingAppointments);
  return (
    <div className="grid gap-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-medium ">My Upcoming Appointments</h2>
        {filteredUpcomingAppointments.length > 2 ? 
        ( <a href="#" className="text-sm text-primary-blue font-medium">
          View All
        </a> ) : null
    }
       
      </div>

      <div className="grid grid-cols-2 gap-6">
        {filteredUpcomingAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 col-span-2 gap-2">
            <p className="text-xl leading-6 font-bold text-[#101828]">You have no upcoming appointments.</p>
              <p className="text-[#475467] text-sm leading-[20.3px]">Find a vendor and book your first appointment. </p>
              <Button size={"sm"} className="text-sm text-white">Browse vendors</Button>
            <p className="text-sm text-gray-500 ">
              
            </p>

          </div>
        ) : (
          filteredUpcomingAppointments.slice(0, 2).map((appointment) => (
            <div
              className="flex gap-x-2 items-start bg-white p-4 rounded-lg shadow-xs"
              key={appointment?.id}
            >
              <div className="bg-[#dbd9fc] rounded-[5px]">
                <p className="text-sm font-semibold uppercase text-primary-blue px-3 py-2">
                  {appointment?.date
                    ? format(new Date(appointment?.date), "MMM")
                    : ""}
                </p>
                <p className="text-lg font-bold text-primary-blue px-3 pb-2">
                  {appointment?.date
                    ? format(new Date(appointment?.date), "dd")
                    : ""}
                </p>
              </div>

              <div className="flex flex-col gap-y-1.5">
                <p className="text-sm font-medium text-[#344054]">
                  {appointment?.serviceName}
                </p>
                <div className="flex gap-x-1">
                  <ClockIcon className="w-3 h-3 text-[#667085] mt-0.5" />
                  <p className="text-xs text-[#667085]">
                    {format(new Date(appointment?.startTime), "hh:mm a")} -{" "}
                    {format(new Date(appointment?.endTime), "hh:mm a")}
                  </p>
                </div>

                <div className="flex gap-x-1">
                  <IoMdBusiness className="w-3 h-3 text-[#667085] mt-0.5" />
                  <p className="text-xs text-[#667085]">
                    {appointment?.serviceCategory}
                  </p>
                </div>

                <div className="flex gap-x-1.5">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-xs font-medium mt-2"
                  >
                    Reschedule
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs font-medium mt-2 "
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientUpcomingAppointment;
