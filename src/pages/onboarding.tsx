import { useState } from "react";
import { Link } from "react-router-dom";

import StepOne from "@/components/onboarding-steps/StepOne";
import { zodResolver } from "@hookform/resolvers/zod";
import { baseSchema } from "@/models/schema";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import VendorStepTwo from "@/components/onboarding-steps/StepTwo";
import VendorStepThree from "@/components/onboarding-steps/StepThree";
import VendorStepFour from "@/components/onboarding-steps/StepFour";

import VendorStepFive from "@/components/onboarding-steps/StepFive";
import ClientStepTwo from "@/components/onboarding-steps/ClientStepTwo";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const schema = baseSchema;

  const methods = useForm({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      userType: undefined,
    },
    mode: "onChange",
  });

  const selectedUserType = useWatch({
    control: methods.control,
    name: "userType",
  });

  const isVendor = selectedUserType === "vendor";
  const isClient = selectedUserType === "client";

  console.log("currentstep", currentStep);

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const completeOnboarding = () => {
    console.log("Onboarding complete");
  };

  return (
    <div className=" gap-y-8 h-screen flex flex-col">
      <Link to={"/"} className="pt-5 px-6 flex gap-x-1 items-center">
        <h2 className="text-2xl font-medium">reserva</h2>
      </Link>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(completeOnboarding)}
          className="flex flex-col w-[50vw] mx-auto "
        >
          {currentStep === 1 && <StepOne nextStep={nextStep} />}

          {isVendor && currentStep === 2 && (
            <VendorStepTwo prevStep={prevStep} nextStep={nextStep} />
          )}

          {isVendor && currentStep === 3 && (
            <VendorStepThree prevStep={prevStep} nextStep={nextStep} />
          )}

          {isVendor && currentStep === 4 && (
            <VendorStepFour prevStep={prevStep} nextStep={nextStep} />
          )}

          {isVendor && currentStep === 5 && (
            <VendorStepFive prevStep={prevStep} />
          )}

          {isClient && currentStep === 2 && (
            <ClientStepTwo prevStep={prevStep} />
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default Onboarding;

// const vendorStepsData = [
//   {
//     id: 0,
//     title: "User Type",
//   },
//   {
//     id: 1,
//     title: "Business Details",
//   },
//   {
//     id: 2,
//     title: "Services",
//   },
//   {
//     id: 3,
//     title: "Availability",
//   },
//   {
//     id: 4,
//     title: "Summary",
//   },
// ];

// const clientStepsData = [
//   {
//     id: 0,
//     title: "User Type",
//   },
//   {
//     id: 1,
//     title: "Choose Preferences",
//   },
// ];
