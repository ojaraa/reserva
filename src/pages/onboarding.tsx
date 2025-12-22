import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Copy,
  PlusIcon,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/shared/FormInput";
import SelectInput from "@/components/shared/SelectInput";
import TextAreaInput from "@/components/shared/TextAreaInput";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { serviceCategories } from "@/models/data";
import type { UserType } from "@/models/interface";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const [selectedUserType, setSelectedUserType] = useState<UserType>("vendor");
  const steps =
    selectedUserType === "client" ? clientStepsData : vendorStepsData;

  console.log("currentstep", currentStep);

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

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
    <div className=" gap-y-8 h-screen flex flex-col">
      <Link to={"/"} className="pt-5 px-6 flex gap-x-1 items-center">
        <h2 className="text-2xl font-medium">reserva</h2>
      </Link>

      <div className="flex flex-col w-[50vw] mx-auto py-4 ">
        {steps[currentStep].step === 0 ? (
          <p className="mb-6">Step 1</p>
        ) : (
          <p className="mb-6">Step {steps[currentStep].step}</p>
        )}

        {steps[currentStep].id < 1 && (
          <div className="flex flex-col items-center justify-center gap-y-16 ">
            <h1 className="text-2xl font-medium text-center">
              How will you use Reserva?
            </h1>
            <div>
              <RadioGroupPrimitive.Root className="grid grid-cols-2 gap-x-8 ">
                {userType.map((type) => (
                  <RadioGroupPrimitive.Item
                    value={type.value}
                    onClick={() => setSelectedUserType(type.value as UserType)}
                    className="grid gap-y-2 text-start py-4 pt-6 px-5 cursor-pointer border border-placeholder data-[state=checked]:border-primary-blue)] data-[state=checked]:bg-[hsl(218,100%,97%)] hover:border-primary-blue rounded-md "
                    key={type.id}
                  >
                    <div className="text-primary-blue">{type.icon}</div>
                    <p className="font-medium text-sm">{type.title}</p>
                    <p className="text-muted-foreground">{type.description}</p>
                  </RadioGroupPrimitive.Item>
                ))}
              </RadioGroupPrimitive.Root>
            </div>

            <Button className="w-[30vw] mt-18" onClick={nextStep}>
              Continue
            </Button>
          </div>
        )}

        {steps[currentStep].id === 1 && selectedUserType === "vendor" ? (
          <div className="grid gap-y-6 w-[40vw]">
            <div className="grid gap-y-2">
              <h1 className="text-2xl font-medium">
                Tell us about your business
              </h1>
              <p className="text-muted-foreground">
                Let's get your profile set up, you can always change it later
              </p>
            </div>

            <div className="grid gap-y-5">
              <FormInput
                type="text"
                label="Business Name"
                placeholder="e.g Haircuilture salon"
              />
              <SelectInput
                label="Business Category"
                placeholder="Select Category"
                options={categories}
              />

              <FormInput
                type="text"
                label="Business phone number"
                placeholder="e.g +1 234 567 890"
              />

              <FormInput
                type="text"
                label="Business location"
                placeholder="e.g Lagos, Nigeria"
                optional
              />

              <div className="flex justify-between mt-4">
                <Button variant="ghost" onClick={prevStep}>
                  Skip for now
                </Button>

                <Button onClick={nextStep}>Continue</Button>
              </div>
            </div>
          </div>
        ) : (
          steps[currentStep].id === 1 &&
          selectedUserType === "client" && (
            <div className="grid gap-y-6 w-[40vw] ">
              <div className="grid gap-y-2">
                <h1 className="text-2xl font-medium">Set up your experience</h1>
                <p className="text-muted-foreground">
                  Personalize your recommendations by telling us what you are
                  looking for, you can always change it later.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-2.5 gap-y-3 ">
                {Object.values(serviceCategories).map((service) => (
                  <label key={service.id} className="inline-block">
                    <input
                      type="checkbox"
                      name="services"
                      value={service.name}
                      className="hidden peer"
                    />
                    <span
                      className="px-4 py-1.5 rounded-[6px] text-sm font-medium cursor-pointer transition-colors inline-block
            peer-checked:bg-primary-blue peer-checked:text-white peer-checked:hover:bg-primary-blue
            bg-white text-gray-700 border hover:bg-gray-50"
                    >
                      {service?.name}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="ghost" onClick={prevStep}>
                  Skip for now
                </Button>

                <Button onClick={() => navigate("/client/dashboard")}>Finish Setup</Button>
              </div>
            </div>
          )
        )}

        {steps[currentStep].id === 2 && selectedUserType === "vendor" && (
          <div className="grid gap-y-6 w-[40vw]">
            <div className="grid gap-y-2">
              <h1 className="text-2xl font-medium">Add your services</h1>
              <p className="text-muted-foreground">
                You can add one or more services that your business offers.
              </p>
            </div>

            {/* {vendorServices?.length > 0
              ? vendorServices.map((service, index) => (
                  <div className="grid grid-cols-2" key={index}>
                    <div className="shadow p-4 grid gap-y-2 rounded-md border border-gray-200">
                        <h3 className="font-semibold">{service.serviceName}</h3>
                        <p className="text-sm  text-muted-foreground">{service?.description}</p>
                        <div className="flex  justify-between">
  <p className="font-medium mt-2">{service?.duration}</p>
                        <p className="font-medium mt-2">₦{service?.price}</p>
                        </div>
                      
                    </div>
                  </div>
                ))
              : null} */}

            <div className="grid gap-y-5">
              <SelectInput
                placeholder="Select a category that match your service"
                label="Service Category"
                options={Object.values(serviceCategories).map((category) => ({
                  label: category.name,
                  value: category.name,
                }))}
              />
              <FormInput
                type="text"
                label="Service Name"
                placeholder="e.g Haircut"
              />

              <div className="grid grid-cols-2 gap-x-4">
                <FormInput
                  type="text"
                  label="Duration"
                  placeholder="e.g 30 mins"
                />

                <FormInput type="text" label="Price" placeholder="e.g $50" />
              </div>

              <TextAreaInput
                label="Service Description"
                placeholder="Describe your service"
                optional
              />

              <Button variant={"dotted"}>
                <PlusIcon />
                Add another service
              </Button>
            </div>

            <div className="flex justify-between mt-4">
              {/* <Button variant="ghost" onClick={prevStep}>
                  Previous
                </Button> */}

              <Button onClick={nextStep} className="w-full">
                Submit
              </Button>
            </div>
          </div>
        )}

        {steps[currentStep].id === 3 && (
          <div className="grid gap-y-6 w-[45vw] pb-7 ">
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
                    <FormInput
                      type="text"
                      label="From"
                      placeholder="09:00 AM"
                    />
                    <FormInput type="text" label="To" placeholder="05:00 PM" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="sameHours" className="rounded" />
                <Label
                  htmlFor="sameHours"
                  className="text-sm text-primary-blue"
                >
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
        )}

        {steps[currentStep].id === 4 && (
          <div className="grid gap-y-6 w-[50vw]">
            <div className="grid gap-y-2">
              <h1 className="text-2xl font-medium">Summary</h1>
              <p className="text-muted-foreground">
                Review your information before completing the setup.
              </p>
            </div>

            <div className="space-y-6">
              <div className="shadow p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Business Details</h3>
                  <Button variant="link" className="text-primary-blue">
                    Edit
                  </Button>
                </div>

                <div className="grid gap-y-4">
                  <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm text-muted-foreground ">
                      Business Name
                    </p>
                    <p className=" text-sm">Haircuilture Beauty</p>
                  </div>

                  <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm text-muted-foreground ">Email</p>
                    <p className="text-sm">hairculturebeauty@gmail.com</p>
                  </div>

                  <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm text-muted-foreground ">Phone</p>
                    <p className="text-sm">070764828902</p>
                  </div>

                  <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm text-muted-foreground ">Category</p>
                    <p className=" text-sm">
                      Beauty — Lash Tech, Makeup Artist
                    </p>
                  </div>

                  <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm text-muted-foreground ">Address</p>
                    <p className=" text-sm">
                      12 Admiralty Way, Lekki Phase 1, Lagos
                    </p>
                  </div>

                  <div className="grid grid-cols-[1.5fr_2fr] text-sm">
                    <p className="text-sm text-muted-foreground ">Short Bio</p>
                    <p className=" text-sm">
                      At Haircuilture Beauty, we are passionate about helping
                      you look and feel your best. We offer a wide range of
                      beauty services to help you achieve your beauty goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="shadow p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Services </h3>
                  <Button variant="link" className="text-primary-blue">
                    Edit
                  </Button>
                </div>

                <div className="grid gap-y-4">
                  <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm  ">Classic lashes</p>
                    <div className=" flex  gap-x-2 text-sm">
                      <p className="text-muted-foreground"> ₦10,000</p>

                      <p className=""> 60mins</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] pb-4">
                    <p className="text-sm  ">Frontall installation</p>
                    <div className=" flex  gap-x-2 text-sm">
                      <p className="text-muted-foreground"> ₦25,000</p>

                      <p className=""> 60mins</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm ">
                    <p className="text-sm  ">Wig Revamping</p>
                    <div className=" flex  gap-x-2 text-sm">
                      <p className="text-muted-foreground"> ₦12,000</p>

                      <p className=""> 120mins</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shadow p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Weekly Availability </h3>
                  <Button variant="link" className="text-primary-blue">
                    Edit
                  </Button>
                </div>

                <div className="grid gap-y-3  text-sm">
                  {[
                    ["Monday", "09:00 AM – 05:00 PM"],
                    ["Tuesday", "09:00 AM – 05:00 PM"],
                    ["Wednesday", "Closed", true],
                    ["Thursday", "10:00 AM – 06:00 PM"],
                    ["Friday", "09:00 AM – 05:00 PM"],
                    ["Saturday", "Closed", true],
                    ["Sunday", "Closed", true],
                  ].map(([day, time, closed]) => (
                    <div className="flex justify-between border-b border-[#E4E4E7] pb-4 text-sm">
                      <span className="">{day}</span>
                      <span className={closed ? "text-muted-foreground" : ""}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-5 justify-end">
                <Button type="button" variant="outline">
                  Back
                </Button>
                <Button
                  //   type="button"
                  onClick={() => navigate("/vendor/dashboard")}
                >
                  Complete setup
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;

{
  /* <div className="flex gap-x-6 justify-between items-center  ">
          {stepsData.map((step) => (
            <div className="flex flex-col gap-y-3 text-center items-center " key={step?.id}>
              <div className="h-8 w-8 rounded-full border flex items-center justify-center border-placeholder">
                {step.id}
              </div>
              <p>{step?.title}</p>
            </div>
          ))}
          </div> */
}

const categories = [
  { value: "health-beauty", label: "Health & Beauty" },
  { value: "fitness", label: "Fitness" },
  { value: "home-services", label: "Home Services" },
  { value: "professional-services", label: "Professional Services" },
  { value: "education", label: "Education" },
  { value: "automotive", label: "Automotive" },
  { value: "wellness", label: "Wellness" },
  { value: "other", label: "Other" },
];

const vendorStepsData = [
  {
    id: 0,
    step: 0,
    title: "User Type",
  },
  {
    id: 1,
    step: 2,
    title: "Business Details",
  },
  {
    id: 2,
    step: 3,
    title: "Services",
  },
  {
    id: 3,
    step: 4,
    title: "Availability",
  },
  {
    id: 4,
    step: 5,
    title: "Summary",
  },
];

const clientStepsData = [
  {
    id: 0,
    step: 0,
    title: "User Type",
  },
  {
    id: 1,
    step: 1,
    title: "Choose Preferences",
  },
];

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
