import { serviceCategories, type ServiceCategoryKey } from "@/models/data";
import type { AppointmentData } from "@/models/interface";
import { format } from "date-fns";
import { Dialog, DialogTrigger } from "./ui/dialog";
import AppointmentDetailsModal from "./AppointmentDetailsModal";

const DayView = ({
  currentDate,
  appointments,
}: {
  currentDate: Date;
  appointments: AppointmentData[];
}) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
    console.log(currentDate);
  return (
    <div className="border rounded-b">
      <div className="flex">
        <div className="pt-20 border-r bg-muted ">
          {hours.map((hour) => (
            <div
              className="whitespace-nowrap text-xs text-muted-foreground h-20 pl-4  "
              key={hour}
            >
              {hour === 0
                ? "12 AM"
                : hour < 12
                ? `${hour} AM`
                : hour === 12
                ? "12 PM"
                : `${hour - 12} PM`}
            </div>
          ))}
        </div>

        <div className="w-full mt-20">
          <div className="">
            {hours.map((slot) => {
              const filteredApppointments = appointments.filter(
                (appointment) => {
                  const appointmentStartTime = new Date(appointment.startTime);
                  const appointmentTime = appointmentStartTime.getHours();
                  return appointmentTime === slot;
                }
              );
              return (
                <div
                  className="relative h-20 border-t  hover:bg-muted/50 cursor-pointer"
                  key={slot}
                >
                  {filteredApppointments.map((appointment) => {
                    const category =
                      serviceCategories[
                        appointment?.serviceCategory as ServiceCategoryKey
                      ];
                    const startTime = new Date(appointment.startTime);
                    const endTime = new Date(appointment.endTime);
                    const startMinutes =
                      startTime.getHours() * 60 + startTime.getMinutes();
                    const endMinutes =
                      endTime.getHours() * 60 + endTime.getMinutes();
                    const durationMinutes = endMinutes - startMinutes;
                    const HOUR_HEIGHT = 80;
                    const minutesInTheHour = startTime.getMinutes();

                    const topPosition = (minutesInTheHour / 60) * HOUR_HEIGHT;

                    const height = (durationMinutes / 60) * HOUR_HEIGHT;

                    return (
                      <Dialog>
                        <DialogTrigger asChild>
                             <div
                        className={`absolute left-0 right-0 z-10 w-full rounded-[5px] px-1.5 py-[1.6px] whitespace-nowrap  cursor-pointer`}
                        style={{
                          backgroundColor: category?.pastelColor,
                          color: category?.color,
                          borderColor: category?.color,
                          borderWidth: ".5px",
                          top: `${topPosition}px`,
                          height: `${height}px`,
                          left: 0,
                          right: 0,
                        }}
                        key={appointment.id}

                      >
                        <p className="font-bold truncate text-[8.5px] whitespace-nowrap">
                          {appointment.serviceName}
                        </p>
                        <p className=" text-[8.5px] font-medium">
                          {format(new Date(appointment?.startTime), "hh:mm a")}{" "}
                          - {format(new Date(appointment?.endTime), "hh:mm a")}
                        </p>
                      </div>
                        </DialogTrigger>

                        <AppointmentDetailsModal appointmentId={appointment.id}/>

                      </Dialog>
                     
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;
