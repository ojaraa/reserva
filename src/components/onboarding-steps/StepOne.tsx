import { BriefcaseBusiness, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Controller, useFormContext } from "react-hook-form";
// import type { UserType } from "@/models/interface";

const StepOne = ({nextStep} : {nextStep: () => void;}) => {
  const { control, watch, getValues } = useFormContext();
  
  console.log(watch("userType"));
  console.log(getValues());
  return (
    <div className="flex flex-col items-center justify-center gap-y-16 ">
        <p className="mb-6">Step 1</p>
      <h1 className="text-2xl font-medium text-center">
        How will you use Reserva?
      </h1>
      <div>
        <Controller
          name="userType"
          control={control}
          render={({ field }) => (
            <RadioGroupPrimitive.Root
              className="grid grid-cols-2 gap-x-8 "
              value={field.value}
              onValueChange={field.onChange}
            >
              {userType.map((type) => (
                <RadioGroupPrimitive.Item
                  value={type.value}
                  key={type.id}
                  className="grid gap-y-2 text-start py-4 pt-6 px-5 cursor-pointer border border-placeholder data-[state=checked]:border-primary-blue)] data-[state=checked]:bg-[hsl(218,100%,97%)] hover:border-primary-blue rounded-md "
                  
                >
                  <div className="text-primary-blue">{type.icon}</div>
                  <p className="font-medium text-sm">{type.title}</p>
                  <p className="text-muted-foreground">{type.description}</p>
                </RadioGroupPrimitive.Item>
              ))}
            </RadioGroupPrimitive.Root>
          )}
        />
      </div>
   
      <Button className="w-[30vw] mt-18" onClick={nextStep} >Continue</Button>
    </div>
  );
};

export default StepOne;

const userType = [
  {
    id: 1,
    title: "I am a Client",
    description:
      "Book and manage appointments with your favorite professionals.",
    icon: <UserRound />,
    value: "client",
  },
  {
    id: 2,
    title: "I am a Business Owner",
    description: "Manage your appointments, services and clients.",
    icon: <BriefcaseBusiness />,
    value: "vendor",
  },
];
