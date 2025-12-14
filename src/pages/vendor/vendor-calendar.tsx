import DayView from "@/components/DayView";
import MonthView from "@/components/MonthView";
import SelectInput from "@/components/shared/SelectInput";
import { Button } from "@/components/ui/button";
import WeeklyView from "@/components/WeeklyView";
import type { AppointmentData } from "@/models/interface";
import { ArrowLeft, ArrowRight, PlusIcon } from "lucide-react";
import { useState } from "react";

// enum CalendarView {
//   Day = "Day",
//   Week = "Week",
//   Month = "Month",
// }

// type CalendarView = "Day" | "Week" | "Month";
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

const VendorCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<CalendarView>(
    CalendarView.Week
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
  return (
    <div className="px-2 ">
      <h2 className="font-medium text-2xl pb-4">My Calendar</h2>
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
              {/* <p className="text-xs">
                {}
                Jan 1, 2025 - Jan 31, 2025
              </p> */}
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
          <DayView currentDate={currentDate} />
        </div>
      )

      }

      {currentView === CalendarView.Week && (
        <div className="">
          <WeeklyView currentDate={getStartOfWeek(currentDate)} appointments={mockCalendarEvents} />
        </div>
      )}

      {currentView === CalendarView.Month && (
        <div className="">
          <MonthView currentDate={currentDate} appointments={mockCalendarEvents} />
        </div>
      )}
    </div>
  );
};

export default VendorCalendar;



 const mockCalendarEvents: AppointmentData[] = [
  
  {
    id: "evt-001",
    clientName: "Sarah Johnson",
    clientPhone: "+234 801 222 3344",
    clientEmail: "sarahj@gmail.com",
    serviceId: "srv-01",
    serviceName: "Classic Lash Extension",
    serviceCategory: "LASHES",
    duration: 120,
    price: 15000,
    date: "2025-12-10",
    startTime: "2025-12-10T08:00:00",
    endTime: "2025-12-10T09:00:00",
    notes: "She prefers soft curls",
    status: "CONFIRMED",
    createdAt: "2025-02-01T10:00:00",
  },

  {
    id: "evt-002",
    clientName: "Michael Peters",
    clientPhone: "+234 701 889 1122",
    clientEmail: "mikepeters@example.com",
    serviceId: "srv-03",
    serviceName: "Men’s Haircut",
    serviceCategory: "HAIR",
    duration: 45,
    price: 8000,
    date: "2025-10-22",
    startTime: "2025-10-22T09:00:00",
    endTime: "2025-10-22T09:45:00",
    notes: "Low fade",
    status: "COMPLETED",
    createdAt: "2025-10-01T11:00:00",
  },

    {
    id: "evt-002",
    clientName: "Michael Peters",
    clientPhone: "+234 701 889 1122",
    clientEmail: "mikepeters@example.com",
    serviceId: "srv-03",
    serviceName: "Men’s Haircut",
    serviceCategory: "HAIR",
    duration: 45,
    price: 8000,
    date: "2025-12-09",
    startTime: "2025-10-22T09:00:00",
    endTime: "2025-10-22T09:45:00",
    notes: "Low fade",
    status: "COMPLETED",
    createdAt: "2025-10-01T11:00:00",
  },

  {
    id: "evt-003",
    clientName: "Adaobi N.",
    clientPhone: "+234 810 555 9988",
    clientEmail: "adaobi.n@example.com",
    serviceId: "srv-04",
    serviceName: "Gel Polish Manicure",
    serviceCategory: "NAILS",
    duration: 90,
    price: 12000,
    date: "2025-12-03",
    startTime: "2025-12-03T12:00:00",
    endTime: "2025-12-03T13:30:00",
    notes: "Prefers nude colors",
    status: "CONFIRMED",
    createdAt: "2025-11-28T14:15:00",
  },

  {
    id: "evt-004",
    clientName: "Blessing O.",
    clientPhone: "+234 802 332 8899",
    clientEmail: "blessing.o@gmail.com",
    serviceId: "srv-02",
    serviceName: "Brow Tint + Shaping",
    serviceCategory: "BROWS",
    duration: 60,
    price: 7000,
    date: "2025-12-14",
    startTime: "2025-12-14T10:00:00",
    endTime: "2025-12-14T11:00:00",
    notes: "Soft arch only",
    status: "CONFIRMED",
    createdAt: "2025-12-01T10:22:00",
  },

  {
    id: "evt-005",
    clientName: "Janet Onu",
    clientPhone: "+234 809 122 7766",
    clientEmail: "janet.onu@example.com",
    serviceId: "srv-06",
    serviceName: "Full Glam Makeup",
    serviceCategory: "MAKEUP",
    duration: 150,
    price: 25000,
    date: "2025-12-20",
    startTime: "2025-12-20T08:30:00",
    endTime: "2025-12-20T11:00:00",
    notes: "Bridal trial",
    status: "CONFIRMED",
    createdAt: "2025-12-05T09:00:00",
  },

  {
    id: "evt-006",
    clientName: "Zainab Yusuf",
    clientPhone: "+234 706 553 4455",
    clientEmail: "zainaby@example.com",
    serviceId: "srv-05",
    serviceName: "Facial Treatment",
    serviceCategory: "SKINCARE",
    duration: 75,
    price: 18000,
    date: "2025-12-08",
    startTime: "2025-12-08T01:00:00",
    endTime: "2025-12-08T02:15:00",
    notes: "Oily skin routine",
    status: "COMPLETED",
    createdAt: "2025-12-06T08:00:00",
  },

  {
    id: "evt-007",
    clientName: "Oluwatobi F.",
    clientPhone: "+234 814 556 2211",
    clientEmail: "tobi.f@example.com",
    serviceId: "srv-07",
    serviceName: "Loc Retwist",
    serviceCategory: "HAIR",
    duration: 120,
    price: 18000,
    date: "2025-10-30",
    startTime: "2025-10-30T13:00:00",
    endTime: "2025-10-30T15:00:00",
    notes: "Palm roll method",
    status: "CONFIRMED",
    createdAt: "2025-10-18T10:30:00",
  },

  {
    id: "evt-008",
    clientName: "Rita Agwu",
    clientPhone: "+234 803 884 2233",
    clientEmail: "rita.a@example.com",
    serviceId: "srv-01",
    serviceName: "Full makeover",
    serviceCategory: "OTHER",
    duration: 120,
    price: 15000,
    date: "2025-12-21",
    startTime: "2025-12-21T16:00:00",
    endTime: "2025-12-21T18:00:00",
    notes: "Wants cat-eye mapping",
    status: "CONFIRMED",
    createdAt: "2025-12-10T10:00:00",
  },

   {
    id: "evt-010",
    clientName: "Funmi A.",
    clientPhone: "+234 805 999 1122",
    clientEmail: "funmia@example.com",
    serviceId: "srv-09",
    serviceName: "Teeth Whitening",
    serviceCategory: "AESTHETICS",
    duration: 90,
    price: 10000,
    date: "2025-12-18",
    startTime: "2025-12-18T10:30:00",
    endTime: "2025-12-18T12:00:00",
    notes: "",
    status: "CONFIRMED",
    createdAt: "2025-12-12T09:20:00",
  },

  {
    id: "evt-009",
    clientName: "Chioma Daniel",
    clientPhone: "+234 801 110 4488",
    clientEmail: "chioma.daniel@example.com",
    serviceId: "srv-08",
    serviceName: "Waxing (Full Legs)",
    serviceCategory: "WAXING",
    duration: 60,
    price: 14000,
    date: "2025-12-05",
    startTime: "2025-12-05T11:00:00",
    endTime: "2025-12-05T12:00:00",
    notes: "",
    status: "COMPLETED",
    createdAt: "2025-12-02T07:45:00",
  },

  {
    id: "evt-010",
    clientName: "Funmi A.",
    clientPhone: "+234 805 999 1122",
    clientEmail: "funmia@example.com",
    serviceId: "srv-09",
    serviceName: "Pedicure + Scrub",
    serviceCategory: "NAILS",
    duration: 90,
    price: 10000,
    date: "2025-12-18",
    startTime: "2025-12-18T13:30:00",
    endTime: "2025-12-18T15:00:00",
    notes: "",
    status: "CONFIRMED",
    createdAt: "2025-12-12T09:20:00",
  },

  {
    id: "evt-011",
    clientName: "Grace T.",
    clientPhone: "+234 708 333 4488",
    clientEmail: "gracet@example.com",
    serviceId: "srv-06",
    serviceName: "Full Glam Makeup",
    serviceCategory: "MAKEUP",
    duration: 150,
    price: 25000,
    date: "2025-12-31",
    startTime: "2025-12-31T07:00:00",
    endTime: "2025-12-31T09:30:00",
    notes: "NYE event",
    status: "CONFIRMED",
    createdAt: "2025-12-20T14:40:00",
  },

  {
    id: "evt-012",
    clientName: "Sandra K.",
    clientPhone: "+234 702 111 5566",
    clientEmail: "sandrak@example.com",
    serviceId: "srv-10",
    serviceName: "Massage Therapy",
    serviceCategory: "SPA",
    duration: 90,
    price: 20000,
    date: "2025-12-12",
    startTime: "2025-12-12T13:00:00",
    endTime: "2025-12-12T14:30:00",
    notes: "Deep tissue",
    status: "COMPLETED",
    createdAt: "2025-12-08T12:00:00",
  },

  {
    id: "evt-013",
    clientName: "Kelechi M.",
    clientPhone: "+234 802 777 1122",
    clientEmail: "kelechi.m@example.com",
    serviceId: "srv-04",
    serviceName: "Gel Polish Manicure",
    serviceCategory: "NAILS",
    duration: 90,
    price: 12000,
    date: "2025-12-27",
    startTime: "2025-12-27T09:00:00",
    endTime: "2025-12-27T10:30:00",
    notes: "Holiday theme nails",
    status: "CONFIRMED",
    createdAt: "2025-12-15T13:30:00",
  },

  {
    id: "evt-014",
    clientName: "Ibrahim Lawal",
    clientPhone: "+234 812 555 9922",
    clientEmail: "ibrahiml@example.com",
    serviceId: "srv-03",
    serviceName: "Men’s Haircut",
    serviceCategory: "HAIR",
    duration: 45,
    price: 8000,
    date: "2025-01-11",
    startTime: "2025-01-11T10:00:00",
    endTime: "2025-01-11T10:45:00",
    notes: "",
    status: "CONFIRMED",
    createdAt: "2025-01-05T09:10:00",
  },

  {
    id: "evt-015",
    clientName: "Mariam Bello",
    clientPhone: "+234 815 009 3344",
    clientEmail: "mariamb@example.com",
    serviceId: "srv-02",
    serviceName: "Brow Tint + Shaping",
    serviceCategory: "BROWS",
    duration: 60,
    price: 7000,
    date: "2025-01-20",
    startTime: "2025-01-20T14:00:00",
    endTime: "2025-01-20T15:00:00",
    notes: "",
    status: "CONFIRMED",
    createdAt: "2025-01-10T11:50:00",
  }

];
