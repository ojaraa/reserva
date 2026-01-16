import { Label } from "../ui/label";
// import { Copy } from "lucide-react";
// import { Button } from "@/components/ui/button";
import FormInput from "@/components/shared/FormInput";
// import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";

const VendorStepThree = () => {
  const availability = {
    monday: {
      enabled: true,
      start: "09:00 AM",
      end: "05:00 PM",
    },
    tuesday: {
      enabled: true,
      start: "09:00 AM",
      end: "05:00 PM",
    },
    wednesday: {
      enabled: true,
      start: "09:00 AM",
      end: "05:00 PM",
    },
    thursday: {
      enabled: true,
      start: "09:00 AM",
      end: "05:00 PM",
    },
    friday: {
      enabled: true,
      start: "09:00 AM",
      end: "05:00 PM",
    },
    saturday: {
      enabled: false,
      start: "10:00 AM",
      end: "02:00 PM",
    },
    sunday: {
      enabled: false,
      start: "10:00 AM",
      end: "02:00 PM",
    },
  };

  const { control } = useFormContext();

  return (
    <div className="grid gap-y-6 sm:w-[50vw] mx-auto px-4 py-12 md:p-8  rounded-3xl bg-white shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">

      <div className="grid gap-y-2 ">
        <h1 className="text-2xl font-medium">Set up Availability</h1>
        <p className="text-muted-foreground">
          Define your booking schedules to let clients know when you're
          available.
        </p>
      </div>

      <div className=" flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
        <div className="w-5 h-5 rounded-full bg-primary-blue text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
          i
        </div>
        <p className="text-sm text-gray-700">
          Clients will only be able to book within these hours
        </p>
      </div>

      <div className="grid gap-y-6 ">
        {Object.keys(availability).map((day) => (
          <div className="flex items-center justify-between  p-4 rounded-xl border border-slate-100 bg-slate-50/50" key={day}>
            <div className=" flex items-center justify-between gap-3">
              <Controller
                name={`availability.${day}.enabled`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />

              <Label className="capitalize" htmlFor={day}>
                {day}
              </Label>
            </div>

            <div className="flex gap-x-4 items-center">
              <Controller
                name={`availability.${day}.start`}
                control={control}
                render={({ field }) => (
                  <FormInput
                    type="text"
                    placeholder="09:00 AM"
                    {...field}
                  />
                )}
              />

              <span className="text-muted-foreground">-</span>

              <Controller
                name={`availability.${day}.end`}
                control={control}
                render={({ field }) => (
                  <FormInput
                    type="text"
                    placeholder="05:00 PM"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="sameHours" className="rounded" />
          <Label htmlFor="sameHours" className="text-sm text-primary-blue">
            Use the same hours for all days
          </Label>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          //   onClick={copyMondayToAll}
          className="text-primary-blue hover:text-primary-blue hover:bg-purple-50"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy Monday's hours to all days
        </Button>
      </div> */}
    </div>
  );
};

export default VendorStepThree;
