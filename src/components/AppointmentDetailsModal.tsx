import {
  AppointmentStatus,
  mockCalendarEvents,
  serviceCategories,
  type AppointmentStatusKey,
  type ServiceCategoryKey,
} from "@/models/data";
import { DialogContent } from "./ui/dialog";
import { format } from "date-fns";
import { CustomAvatar } from "./shared/CustomAvatar";
// import { User } from "lucide-react";
import { IoMdPricetag } from "react-icons/io";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const AppointmentDetailsModal = ({
  appointmentId,
}: {
  appointmentId: string;
}) => {
  const appointment = mockCalendarEvents.find(
    (appointment) => appointment.id === appointmentId
  );
  const statusStyles =
    AppointmentStatus[appointment?.status as AppointmentStatusKey];

  const category =
    serviceCategories[appointment?.serviceCategory as ServiceCategoryKey];
  return (
    <div className="">
      <DialogContent
        className="flex flex-col gap-y-3 w-[380px] px-4! pt-6 pb-6   "
        showCloseButton={false}
      >
        <div className=""></div>

        <div className="flex justify-between items-center ">
          <div className="flex flex-col">
            <div
              className="rounded-[50px] w-fit px-2 text-[10px] capitalize"
              style={{
                backgroundColor: category?.pastelColor,
                color: category?.color,
              }}
            >
              <p className="">
                {`${appointment?.serviceCategory.toLowerCase()}`}
              </p>
            </div>

            <h3 className="font-semibold text-lg">
              {appointment?.serviceName}
            </h3>
          </div>
        </div>

        <div className="">
          <p className="text-deep-grey text-base">
            {appointment?.date && format(appointment?.date, "EEEE, MMMM d")}
          </p>
          <p className="text-deep-grey text-base">
            {appointment?.startTime &&
              format(appointment?.startTime, "hh:mm a")}{" "}
            - {appointment?.endTime && format(appointment?.endTime, "hh:mm a")}
          </p>
        </div>

        <div className="grid gap-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <div>
                <CustomAvatar
                  src={""}
                  fallback={`${
                    appointment?.clientFirstName?.charAt(0)?.toUpperCase() ||
                    appointment?.clientFirstName?.charAt(0)?.toUpperCase()
                  }`}
                  className="w-10 h-10 text-xs font-semibold"
                />
              </div>

              <div className="">
                <p className="text-black font-semibold text-sm">{`${appointment?.clientFirstName} ${appointment?.clientLastName}`}</p>
                <p className="text-xs">{appointment?.clientEmail}</p>
                <p className="text-[10px]">
            {appointment?.clientPhone}
          </p>
              </div>
            </div>

            <div
              className="rounded-[50px] w-fit px-2 text-[10px] capitalize"
              style={{
                backgroundColor: statusStyles?.bgColor,
                color: statusStyles.color,
              }}
            >
              {`${appointment?.status.toLowerCase()}`}
            </div>
          </div>

          

          <div className="flex gap-x-2 items-center">
            <IoMdPricetag className="mt-1.5" />
            <p className="">₦{appointment?.price}</p>
          </div>

          <div className="flex flex-col gap-y-1.5">
            <p className="text-base-grey text-base font-semibold">
              Additional Notes
            </p>

            <p className="text-sm text-base-grey leading-6.5">
              {appointment?.notes}
            </p>
          </div>
        </div>

        <hr/>

        <div className="flex gap-2 justify-end">
            {appointment?.status === "UPCOMING" && (
              <Button variant="danger">
                <X size={16} />
                Cancel appointment 
              </Button>
            )}
            {/* <Button></Button> */}

        </div>
      </DialogContent>
    </div>
  );
};

export default AppointmentDetailsModal;
