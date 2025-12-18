import { cn } from "@/lib/utils";
import { serviceCategories, type ServiceCategoryKey } from "@/models/data";
import type { AppointmentData } from "@/models/interface";
import { format } from "date-fns";
import { Dialog, DialogTrigger } from "./ui/dialog";
import AppointmentDetailsModal from "./AppointmentDetailsModal";

const WeeklyView = ({
  currentDate,
  appointments,
}: {
  currentDate: Date;
  appointments: AppointmentData[];
}) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    return date;
  });

  const timeSlots = Array.from({ length: 48 }, (_, i) => i);

  return (
    <div className="border rounded-b">
      <div className="flex">
        <div className="">
          <div className="h-10 bg-muted border-r" />
          <div className=" border-r  bg-muted ">
            {hours.map((hour) => (
              <div
                className="whitespace-nowrap text-xs text-muted-foreground h-20  pl-4"
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
        </div>

        <div className="w-full flex flex-col ">
          <div className="grid grid-cols-7 border-b h-10">
            {days.map((day) => {
              const today = new Date().toDateString() === day.toDateString();
              return (
                <div
                  className={cn(
                    "flex items-center justify-center border-r text-center"
                  )}
                  key={day.toISOString()}
                >
                  <div className="flex text-xs items-center gap-x-1">
                    <p className="">
                      {day.toLocaleDateString("en-US", { weekday: "short" })}
                    </p>

                    <div
                      className={cn(
                        today &&
                          "bg-primary-blue h-5 w-5 text-xs flex items-center justify-center rounded-full text-center text-white"
                      )}
                    >
                      {day.getDate()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="  w-full h-full grid grid-cols-7  ">
            {days.map((day) => {
              const dayAppointments = appointments.filter(
                (appointment) =>
                  new Date(appointment.date).toDateString() ===
                  day.toDateString()
              );
              return (
                <div
                  className="w-full relative border-r"
                  key={day.toISOString()}
                >
                  {timeSlots.map((slot) => (
                    <div
                      className="h-10 pointer-events-none border-b  hover:bg-muted/50 cursor-pointer"
                      key={`${day.toISOString()}-${slot}`}
                    />
                  ))}

                  {dayAppointments.map((appointment) => {
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
                    
                    const HEADER_HEIGHT = 40;

                    const topPosition =
                      HEADER_HEIGHT + (startMinutes / 30) * 40;

                    const height = (durationMinutes / 30) * 40;

                    return (
                      <Dialog>
                        <DialogTrigger asChild>
 <div
                        className={`absolute pointer-events-auto left-0 right-0 z-10 w-full rounded-[5px]  px-1.5 py-[1.6px] whitespace-nowrap  cursor-pointer`}
                        style={{
                          backgroundColor: category?.pastelColor,
                          color: category?.color,
                          borderColor: category?.color,
                          borderWidth: ".5px",
                          top: `${topPosition}px`,
                          height: `${height}px`,                        
                        }}
                        key={appointment?.id}
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

export default WeeklyView;

//  <div className="w-full h-full grid grid-cols-7">
//             {days.map((day) => {

//               const dayAppointments = appointments.filter(
//                 (appointment) =>
//                   new Date(appointment.date).toDateString() ===
//                   day.toDateString()
//               );

//               return (
//                 <div
//                   className="w-full relative border-r"
//                   key={day.toISOString()}
//                 >

//                   {timeSlots.map((slot) => {
//                     return (
//                       <div
//                         className="h-10 border-b hover:bg-muted/50 cursor-pointer"
//                         key={slot}
//                       />
//                     );
//                   })}

//                   {dayAppointments.map((appointment) => {
//                     const category =
//                       serviceCategories[
//                         appointment?.serviceCategory as ServiceCategoryKey
//                       ];

//                     const startTime = new Date(appointment.startTime);
//                     const endTime = new Date(appointment.endTime);
//                     const startMinutes =
//                       startTime.getHours() * 60 + startTime.getMinutes();
//                     const endMinutes =
//                       endTime.getHours() * 60 + endTime.getMinutes();
//                     const durationMinutes = endMinutes - startMinutes;

//                     const slotsPassed = Math.floor(startMinutes / 30);
//                     const topPosition = (startMinutes / 30) * 40 + slotsPassed;
//                     const height = (durationMinutes / 30) * 40;

//                     return (
//                       <div
//                         key={appointment.id}
//                         className="absolute z-10 w-full rounded-[5px] px-1.5 py-[1.6px] whitespace-nowrap cursor-pointer"
//                         style={{
//                           backgroundColor: category?.pastelColor,
//                           color: category?.color,
//                           borderColor: category?.color,
//                           borderWidth: ".5px",
//                           top: `${topPosition}px`,
//                           height: `${height}px`,
//                           left: 0,
//                           right: 0,
//                         }}
//                       >
//                         <p className="font-bold truncate text-[8.5px] whitespace-nowrap">
//                           {appointment.serviceName}
//                         </p>
//                         <p className="text-[8.5px] font-medium">
//                           {format(new Date(appointment?.startTime), "hh:mm a")}{" "}
//                           - {format(new Date(appointment?.endTime), "hh:mm a")}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
