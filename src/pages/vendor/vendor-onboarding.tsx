import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { vendorOnboardingSchema, type FormData } from "@/models/schema";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import VendorStepOne from "@/components/onboarding-steps/VendorStepOne";
import VendorStepTwo from "@/components/onboarding-steps/VendorStepTwo";
import VendorStepThree from "@/components/onboarding-steps/VendorStepThree";
import ReviewVendorOnboardingDetails from "@/components/onboarding-steps/ReviewVendorOnboardingDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase.config";
import { useAuth } from "@/hooks/useAuth";

const VendorOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const methods = useForm<FormData>({
    resolver: zodResolver(vendorOnboardingSchema),
    defaultValues: {
      businessName: "",
      businessCategory: "",
      businessPhoneNumber: "",
      businessLocation: "",
      businessBio: "",

      serviceCategory: "",
      serviceName: "",
      serviceDuration: 0,
      servicePrice: 0,

      serviceDescription: "",
      availability: {
        monday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
        tuesday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
        wednesday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
        thursday: { enabled: true, start: "09:00 AM", end: "05:00 PM" },
        friday: { enabled: true, start: "08:00 AM", end: "05:00 PM" },
        saturday: { enabled: false, start: "10:00 AM", end: "02:00 PM" },
        sunday: { enabled: false, start: "10:00 AM", end: "02:00 PM" },
      },
    },
    mode: "onChange",
  });

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const stepFields = [
    [
      "businessName",
      "businessCategory",
      "businessPhoneNumber",
      "businessLocation",
    ],
    [
      "serviceCategory",
      "serviceName",
      "serviceDuration",
      "servicePrice",
      "serviceDescription",
    ],
    ["availability"],
  ];

  const { user } = useAuth();

  type FieldName = keyof FormData;
  const submitForm: SubmitHandler<FormData> = async (data) => {
    try {
      if (user?.uid) {
        const vendorsRef = doc(db, "vendors", user?.uid);
        await setDoc(vendorsRef, data);

        console.log("data submitted succesfully", data);
        await updateDoc(doc(db, "users", user?.uid), {
          onboardingStatus: "COMPLETED",
        });
        methods.reset();
        navigate("/onboarding/success");
        // localStorage.setItem("userType", "vendor");
        // localStorage.setItem("onboardingCompleted", "true");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isReviewStep = currentStep === stepFields.length;

  const { getValues } = methods;

  const nextStep = async () => {
    if (currentStep === 3) {
      submitForm(getValues());
      return;
    }

    const fieldsToValidate = stepFields[currentStep];

    const isValid = await methods.trigger(fieldsToValidate as FieldName[], {
      shouldFocus: true,
    });

    if (!isValid) return;

    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className=" gap-y-6flex flex-col 00 min-h-screen bg-slate-50 py-12 px-6">
     

      <div className=" mx-auto mb-9 w-full  md:w-2xl">
        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          <span>Step {currentStep} of 4</span>
          <span>{Math.round((currentStep / 4) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out bg-primary-blue"
            style={{
              width: `${(currentStep / 4) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitForm)}
          className="flex flex-col w-full    "
        >
          {currentStep === 0 && <VendorStepOne />}

          {currentStep === 1 && <VendorStepTwo />}

          {currentStep === 2 && <VendorStepThree />}

          {currentStep === 3 && (
            <ReviewVendorOnboardingDetails setCurrentStep={setCurrentStep} />
          )}

          <div className="flex justify-between items-center mt-10 pb-10 w-full sm:w-[50vw] mx-auto ">
            <Button
              variant="outline"
              className="py-7 px-10!"
              onClick={prevStep}
            >
              <ArrowLeft />
              Back
            </Button>

            <Button onClick={nextStep} type="button" className="py-7 px-10">
              {isReviewStep ? "Complete setup" : "Next"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default VendorOnboarding;
