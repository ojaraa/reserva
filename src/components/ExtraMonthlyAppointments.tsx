import { format } from "date-fns";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { XIcon } from "lucide-react";
import type { AppointmentData } from "@/models/interface";
import { serviceCategories, type ServiceCategoryKey } from "@/models/data";
import AppointmentDetailsModal from "./AppointmentDetailsModal";

const ExtraMonthlyAppointments = ({
  day,
  appointments,
}: {
  day: Date;
  appointments: AppointmentData[];
}) => {
  return (
    <DialogContent
      className="max-w-[300px]! max-h-[90vh] overflow-y scroll p-6"
      showCloseButton={false}
    >
      <DialogHeader>
        <div className="flex items-center justify-between w-full">
          <div></div>
          <div className="text-center space-y-1">
            <h3 className="text-lg text-[#667185] uppercase">
              {day && format(day, "EEEE")}
            </h3>
            <p className="font-bold text-black text-2xl">
              {day && format(day, "d")}
            </p>
          </div>

          <DialogClose className="cursor-pointer">
            <XIcon className="size-5" />
          </DialogClose>
        </div>
      </DialogHeader>

      <div className="flex flex-col gap-y-3">
        {appointments?.map((appointment) => {
          const category =
            serviceCategories[
              appointment?.serviceCategory as ServiceCategoryKey
            ];
          return (
            <div className=" ">
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className={` w-full rounded-[5px] px-3 py-4 whitespace-nowrap  cursor-pointer`}
                    style={{
                      backgroundColor: category?.pastelColor,
                      color: category?.color,
                      borderColor: category?.color,
                    //   borderWidth: ".5px",
                    }}
                    key={appointment.id}
                  >
                    <p className="font-bold truncate text-[8.5px] whitespace-nowrap">
                      {appointment.serviceName}
                    </p>
                    <p className=" text-[8.5px] font-medium">
                      {format(new Date(appointment?.startTime), "hh:mm a")} -{" "}
                      {format(new Date(appointment?.endTime), "hh:mm a")}
                    </p>
                  </div>
                </DialogTrigger>

                <AppointmentDetailsModal appointmentId={appointment.id} />
              </Dialog>
            </div>
          );
        })}
      </div>
    </DialogContent>
  );
};

export default ExtraMonthlyAppointments;
