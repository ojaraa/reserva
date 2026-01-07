import DayView from "@/components/DayView";
import MonthView from "@/components/MonthView";
import SelectInput from "@/components/shared/SelectInput";
import { Button } from "@/components/ui/button";
import WeeklyView from "@/components/WeeklyView";
import { mockCalendarEvents } from "@/models/data";
import { ArrowLeft, ArrowRight, PlusIcon } from "lucide-react";
import { useState } from "react";

const CalendarView = {
  Day: "Day",
  Week: "Week",
  Month: "Month",
} as const;

type CalendarView = (typeof CalendarView)[keyof typeof CalendarView];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ClientCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<CalendarView>(
    CalendarView.Month
  );

  const handleNavigation = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (currentView === CalendarView.Day) {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (currentView === CalendarView.Week) {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
    } else {
      newDate.setMonth(
        currentDate.getMonth() + (direction === "next" ? 1 : -1)
      );
    }
    setCurrentDate(newDate);
  };

  const getStartOfWeek = (date: Date) => {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay());
    startDate.setHours(0, 0, 0, 0);
    return startDate;
  };

  const getEventsForDate = (date: Date) => {
    return mockCalendarEvents.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate.toDateString() === date.toDateString();
    });
  };
  return (
    <div className="p-6 bg-white m-0">
      <h2 className="font-medium text-2xl pb-4">My Calendar 🚀</h2>
      <div className="border-t border-x p-4 rounded-t">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div className="border flex flex-col items-center rounded-[6px]">
              <span className="bg-muted py-1.5 px-3 text-sm font-bold">
                {months[currentDate.getMonth()].slice(0, 3).toUpperCase()}
              </span>
              <span className="font-medium">{currentDate.getDate()}</span>
            </div>

            <div className="flex flex-col ">
              <p className="font-bold text-sm">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </p>
            </div>
          </div>

          <div className="flex gap-x-3 items-center">
            <div className="flex items-center gap-x-0 border rounded-lg divide-x">
              <Button
                className=""
                variant={"ghost"}
                onClick={() => handleNavigation("prev")}
              >
                <ArrowLeft />
              </Button>
              <Button
                className=""
                variant={"ghost"}
                onClick={() => setCurrentDate(new Date())}
              >
                Today
              </Button>
              <Button
                className=""
                variant={"ghost"}
                onClick={() => handleNavigation("next")}
              >
                <ArrowRight />
              </Button>
            </div>

            <SelectInput
              value={currentView}
              options={Object.values(CalendarView).map((view) => ({
                value: view,
                label: view,
              }))}
              onChange={(value) => setCurrentView(value as CalendarView)}
            />

            <Button>
              <PlusIcon />
              Add appointment
            </Button>
          </div>
        </div>
      </div>

      {currentView === CalendarView.Day && (
        <div className="">
          <DayView
            currentDate={currentDate}
            appointments={getEventsForDate(currentDate)}
          />
        </div>
      )}

      {currentView === CalendarView.Week && (
        <div className="">
          <WeeklyView
            currentDate={getStartOfWeek(currentDate)}
            appointments={mockCalendarEvents}
          />
        </div>
      )}

      {currentView === CalendarView.Month && (
        <div className="">
          <MonthView
            currentDate={currentDate}
            appointments={mockCalendarEvents}
          />
        </div>
      )}
    </div>
  );
};

export default ClientCalendar;
