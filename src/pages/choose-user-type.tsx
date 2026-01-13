import { BriefcaseBusiness, UserRound } from "lucide-react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { userTypeSchema, type UserType } from "@/models/schema";

const ChooseUserType = () => {
  const methods = useForm<UserType>({
    resolver: zodResolver(userTypeSchema),
    defaultValues: {
      userType: undefined,
    },
    mode: "onChange",
  });

  const selectedUserType = useWatch({
    control: methods.control,
    name: "userType",
  });

  const navigate = useNavigate();

  const handleSelectedUserType = () => {
    if (selectedUserType === "vendor") {
      navigate("/onboarding/vendor");
    } else {
      navigate("/onboarding/client");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-16  w-full px-6 sm:w-[45vw] mx-auto">
      <p className="mb-6">Step 1</p>
      <h1 className="text-2xl font-medium text-center">
        How will you use Reserva?
      </h1>
      <div>
        <Controller
          name="userType"
          control={methods.control}
          render={({ field }) => (
            <RadioGroupPrimitive.Root
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-4 sm:gap-x-8 "
              value={field.value}
              onValueChange={field.onChange}
            >
              {userType.map((type) => (
                <RadioGroupPrimitive.Item
                  value={type.value}
                  key={type.id}
                  className="grid gap-y-2 text-start py-4 pt-6 px-5 cursor-pointer border border-placeholder data-[state=checked]:border-primary-blue)] data-[state=checked]:bg-[hsl(218,100%,97%)] hover:border-primary-blue rounded-md hover:bg-[hsl(218,100%,97%)] "
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

      <Button
        className=" w-full sm:w-[30vw]"
        disabled={!selectedUserType}
        onClick={handleSelectedUserType}
      >
        Continue
      </Button>
    </div>
  );
};

export default ChooseUserType;

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
