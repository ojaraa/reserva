const DayView = ({ currentDate }: { currentDate: Date }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
//   const days = Array.from({ length: 7 }, (_, i) => {
//     const date = new Date(currentDate);
//     date.setDate(currentDate.getDate() + i);
//     return date;
//   });
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
                // const filteredApppointments = 
              return (
                <div
                  className="h-20 border-t  hover:bg-muted/50 cursor-pointer"
                  key={slot}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;
