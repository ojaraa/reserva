import { cn } from "@/lib/utils";
import { serviceCategories, type ServiceCategoryKey } from "@/models/data";
import type { AppointmentData } from "@/models/interface";
import { format } from "date-fns";
import { Dialog, DialogTrigger } from "./ui/dialog";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import ExtraMonthlyAppointments from "./ExtraMonthlyAppointments";
// import { useState } from "react";

const MonthView = ({
  currentDate,
  appointments,
}: {
  currentDate: Date;
  appointments: AppointmentData[];
}) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   const [currentDate, setCurrentDate] = useState(new Date());
  const firstDayOfTheMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfTheMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startDate = new Date(firstDayOfTheMonth);
  startDate.setDate(startDate.getDate() - firstDayOfTheMonth.getDay());

  const days = [];
  const current = new Date(startDate);

  while (current <= lastDayOfTheMonth || days.length < 42) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
    if (days.length >= 42) break;
  }

  const test = serviceCategories["BARBING"];
  console.log(test);

  return (
    <div className="border rounded-b ">
      <div className="grid grid-cols-7 ">
        {weekdays.map((day) => (
          <div
            className="text-center border-r font-medium text-sm py-2"
            key={day}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 ">
        {days.map((day) => {
          const isCurrentMonth = day.getMonth() === currentDate.getMonth();
          const isToday = day.toDateString() === new Date().toDateString();
          const dailyAppointments = appointments.filter(
            (event) =>
              new Date(event.date).toDateString() === day.toDateString()
          );
          return (
            <div
              className={cn(
                "min-h-[150px] pt-2 px-2 flex flex-col  border font-medium text-sm",
                isCurrentMonth ? "bg-white" : "bg-muted text-muted-foreground"
              )}
              key={day.toDateString()}
            >
              <div className=" flex flex-col gap-y-1">
                <div
                  className={cn(
                    isToday &&
                      "bg-primary-blue rounded-full text-center h-6 w-6 text-white  text-sm"
                  )}
                >
                  {day.getDate()}
                </div>

                <div className=" flex flex-col gap-y-0.5">
                  {dailyAppointments.slice(0, 3).map((appointment) => {
                    const category =
                      serviceCategories[
                        appointment.serviceCategory as ServiceCategoryKey
                      ];
                    return (
                      <Dialog>
                        <DialogTrigger>
                          <div
                            key={appointment.id}
                            className={`flex items-center justify-between whitespace-nowrap cursor-pointer px-1.5 py-[1.6px] gap-x-2  rounded-[6px]  border border-[${category?.color}]
                       text-[${category.color}]`}
                            style={{
                              backgroundColor: category?.pastelColor,
                              borderColor: category?.color,
                              color: category?.color,
                            }}
                          >
                            <p className="font-bold truncate text-[8.5px] whitespace-nowrap">
                              {appointment.serviceName}
                            </p>

                            <p className=" text-[8.5px] font-medium">
                              {format(
                                new Date(appointment?.startTime),
                                "hh:mm a"
                              )}
                            </p>
                          </div>
                        </DialogTrigger>
                        <AppointmentDetailsModal
                          appointmentId={appointment.id}
                        />
                      </Dialog>
                    );
                  })}

                  {dailyAppointments.length > 3 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <p className=" text-[8.5px] text-muted-foreground font-medium cursor-pointer">
                          +{dailyAppointments.length - 3} more
                        </p>
                      </DialogTrigger>

                      <ExtraMonthlyAppointments day={day} appointments={dailyAppointments.slice(3)} />
                    </Dialog>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
