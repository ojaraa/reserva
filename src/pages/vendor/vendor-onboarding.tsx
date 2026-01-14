import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className=" gap-y-8 h-screen flex flex-col">
      <Link to={"/"} className="pt-5 px-6 flex gap-x-1 items-center">
        <h2 className="text-2xl font-medium">reserva</h2>
      </Link>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitForm)}
          className="flex flex-col w-full px-6  sm:w-[45vw] mx-auto "
        >
          {currentStep === 0 && <VendorStepOne />}

          {currentStep === 1 && <VendorStepTwo />}

          {currentStep === 2 && <VendorStepThree />}

          {currentStep === 3 && (
            <ReviewVendorOnboardingDetails setCurrentStep={setCurrentStep} />
          )}

          <div className="flex justify-between mt-10 pb-10 ">
            <Button variant="ghost" onClick={prevStep}>
              <ArrowLeft />
              Back
            </Button>

            <Button onClick={nextStep} type="button">
              {isReviewStep ? "Complete setup" : "Next"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default VendorOnboarding;
