import { cn } from "@/lib/utils";
import {
  //   AppointmentStatus,
  mockCalendarEvents,
  serviceCategories,
  //   type AppointmentStatusKey,
  type ServiceCategoryKey,
} from "@/models/data";
import { addDays, format, startOfWeek } from "date-fns";
import { useState } from "react";
import AppointmentDetailsModal from "../AppointmentDetailsModal";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ExtraMonthlyAppointments from "../ExtraMonthlyAppointments";
// import { Button } from "../ui/button";

const today = new Date();
// const todayDate = format(today, "yyyy-MM-dd");

const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
  addDays(startOfCurrentWeek, index)
);

const TodayAppointment = () => {
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const filteredAppointmentsForSelectedDay = mockCalendarEvents.filter(
    (appointment) =>
      new Date(appointment.date).toDateString() ===
      new Date(selectedDay).toDateString()
  );
  console.log(filteredAppointmentsForSelectedDay);
  console.log(selectedDay);
  return (
    <div>
      <h2 className="text-base font-medium mb-4">Your Appointments for this week.</h2>
      <div className="flex flex-col  ">
        <div className="flex items-center justify-between">
          {daysOfWeek.map((day, index) => {
            const isSelected = format(day, "yyyy-MM-dd") === format(selectedDay, "yyyy-MM-dd");

            const handleDayClick = () => {
            //   const selectedDate = format(day, "yyyy-MM-dd");
              setSelectedDay(day);
            };

            return (
              <button
                onClick={() => {
                  handleDayClick();
                }}
                key={index}
                className={cn(
                  "flex items-center transition-all ease-in w-fit py-3 px-3.5 flex-col cursor-pointer",
                  {
                    "bg-light-primary-blue rounded-3xl": isSelected,
                  }
                )}
              >
                <p
                  className={cn(
                    "text-xs font-medium",
                    `${isSelected ? "text-white" : "text-[#B5B5C3]"}`
                  )}
                >
                  {format(day, "EEE")}
                </p>
                <p
                  className={cn(
                    "text-sm font-bold",
                    `${isSelected ? "text-white" : "text-[#181C32]"}`
                  )}
                >
                  {format(day, "d")}
                </p>
              </button>
            );
          })}
        </div>

        <div className="grid gap-1.5 mt-4">
          {filteredAppointmentsForSelectedDay.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-4 gap-2">
              <p className="text-sm text-gray-500 text-center">
              {/* {`  No appointments for ${format(selectedDay, "MMMM d, yyyy")}`} */}
              You’re free today. Select a vendor and book an appointment.
              </p>
              {/* <Button className="text-xs!" >
                Browse vendors
              </Button> */}
            </div>
          ) : (
            filteredAppointmentsForSelectedDay
              .slice(0, 2)
              .map((appointment) => {
                const category =
                  serviceCategories[
                    appointment?.serviceCategory as ServiceCategoryKey
                  ];

                return (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className={` w-full rounded-[5px] px-2 py-3 flex justify-between items-center  whitespace-nowrap  cursor-pointer`}
                        style={{
                          backgroundColor: category?.pastelColor,
                          color: category?.color,
                        }}
                        key={appointment.id}
                      >
                        <div className="flex flex-col">
                          {/* <div className="flex gap-x-1 items-center pt-2">
                            <CustomAvatar
                              src={""}
                              fallback={`${
                                appointment?.clientFirstName
                                  ?.charAt(0)
                                  ?.toUpperCase() ||
                                appointment?.clientFirstName
                                  ?.charAt(0)
                                  ?.toUpperCase()
                              }`}
                              className="w-6 h-6 text-xs text-black"
                            />

                            <p className=" text-black  text-xs">Vendor Name</p>
                          </div> */}
                          <p className="font-bold truncate text-xs whitespace-nowrap">
                            {appointment.serviceName}
                          </p>
                          <p className=" text-xs font-medium">
                            {format(
                              new Date(appointment?.startTime),
                              "hh:mm a"
                            )}{" "}
                            -{" "}
                            {format(new Date(appointment?.endTime), "hh:mm a")}
                          </p>
                        </div>
                      </div>
                    </DialogTrigger>

                    <AppointmentDetailsModal appointmentId={appointment.id} />
                  </Dialog>
                );
              })
          )}
        </div>

        {filteredAppointmentsForSelectedDay.length > 2 && (
          <div className="flex flex-col text-center">
            <Dialog>
              <DialogTrigger asChild>
                <p className=" text-sm text-muted-foreground font-medium cursor-pointer hover:underline hover:text-primary-blue mt-1">
                  +{filteredAppointmentsForSelectedDay.length - 2} more
                </p>
              </DialogTrigger>

              <ExtraMonthlyAppointments
                day={selectedDay}
                appointments={filteredAppointmentsForSelectedDay.slice(2)}
              />
            </Dialog>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayAppointment;
