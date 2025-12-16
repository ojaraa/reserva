import { Button } from "@/components/ui/button";
import {
  AppointmentStatus,
  mockCalendarEvents,
  type AppointmentStatusKey,
} from "@/models/data";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock, FaCalendarDays } from "react-icons/fa6";
import { format, parseISO } from "date-fns";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdPricetag } from "react-icons/io";

const BookingDetails = () => {
  const { id } = useParams();

  const appointmentDetail = mockCalendarEvents.find(
    (appointment) => appointment.id === id
  );
  console.log(appointmentDetail);
  const statusStyles =
    AppointmentStatus[appointmentDetail?.status as AppointmentStatusKey];
  return (
    <div className="grid gap-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-[#0b0a13] text-[20px] font-semibold">
          Appointment Details
        </h1>
        <div className="flex gap-x-2">
          {appointmentDetail?.status === "UPCOMING" && (
            <Button variant="destructive">
              <X size={16} />
              Cancel appointment
            </Button>
          )}
        </div>
      </div>

      <div className="grid w-full  max-w-[75vw] whitespace-nowrap gap-y-4 py-4 rounded-md shadow-sm">
        <div className="flex justify-between items-center px-4">
          <p className="text-[#0d0c17] text-[16px] font-medium">
            {appointmentDetail?.serviceName}
          </p>

          <div
            className="rounded-[50px] w-fit px-2 text-sm capitalize"
            style={{
              backgroundColor: statusStyles?.bgColor,
              color: statusStyles.color,
            }}
          >{`${appointmentDetail?.status.toLowerCase()}`}</div>
        </div>

        <hr />

        <div className="grid grid-cols-2 gap-6 text-sm px-4">
          <div className="flex gap-x-2 items-start">
            <FaUser className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Client</p>
              <p className="">
                {appointmentDetail?.clientFirstName}{" "}
                {appointmentDetail?.clientLastName}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-start">
            <FaCalendarDays className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Date</p>
              <p className="">
                {appointmentDetail?.date
                  ? format(
                      parseISO(appointmentDetail?.date),
                      "EEEE, dd MMMM , yyyy"
                    )
                  : "-"}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-start">
            <FaClock className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Time</p>
              <p className="">
                {appointmentDetail?.startTime && appointmentDetail?.endTime ? (
                  <>
                    {format(new Date(appointmentDetail.startTime), "hh:mm a")} -{" "}
                    {format(new Date(appointmentDetail.endTime), "hh:mm a")}
                  </>
                ) : (
                  <span>-</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-start">
            <GiSandsOfTime className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Duration</p>
              <p className="">
                
                {appointmentDetail?.duration && appointmentDetail?.duration > 60 ? `${appointmentDetail?.duration/60} hours` : `${appointmentDetail?.duration} minutes`}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-start">
            <IoMdPricetag className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Price</p>
              <p className="">₦{appointmentDetail?.price}</p>
            </div>
          </div>
        </div>

        <div className="border-t py-4 px-6">
          <p className="font-semibold text-lg">Notes</p>
          <p className="mt-2">{appointmentDetail?.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
