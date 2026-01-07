import { Label } from "../ui/label";
import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/shared/FormInput";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const VendorStepFour = ({
  prevStep,
  nextStep,
}: {
  prevStep: () => void;
  nextStep: () => void;
}) => {
  const [availability, setAvailability] = useState({
    Monday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
    Tuesday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
    Wednesday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
    Thursday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
    Friday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
    Saturday: { enabled: false, start: "10:00 AM", end: "02:00 PM" },
    Sunday: { enabled: false, start: "10:00 AM", end: "02:00 PM" },
  });

  console.log(setAvailability);
  return (
    <div className="grid gap-y-6 w-[45vw] pb-7 ">
      <p className="">Step 4</p>
      <div className="grid gap-y-2">
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
          <div className="flex items-center gap-x-8 " key={day}>
            <div className="w-36 flex items-center justify-between gap-3">
              <Label className="" htmlFor={day}>
                {day}
              </Label>
              <Switch />
            </div>

            <div className="flex gap-x-4">
              <FormInput type="text" label="From" placeholder="09:00 AM" />
              <FormInput type="text" label="To" placeholder="05:00 PM" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
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
      </div>

      <div className="flex justify-between mt-4">
        <Button variant="ghost" onClick={prevStep}>
          <ArrowLeft />
          Back
        </Button>

        <Button onClick={nextStep} className="">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default VendorStepFour;
