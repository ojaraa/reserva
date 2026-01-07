import FormInput from "../shared/FormInput";
import SelectInput from "../shared/SelectInput";
import { Button } from "../ui/button";

const VendorStepTwo = ({prevStep, nextStep} : {prevStep : () => void; nextStep: () => void;}) => {
  return (
    <div className="grid gap-y-6 w-[40vw]">
        <p className="mb-6">Step 2</p>
      <div className="grid gap-y-2">
        <h1 className="text-2xl font-medium">Tell us about your business</h1>
        <p className="text-muted-foreground">
          Let's get your profile set up, you can always change it later
        </p>
      </div>

      <div className="grid gap-y-5">
        {/* <Controller

        /> */}
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
            Go back
          </Button>

          <Button onClick={nextStep}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default VendorStepTwo;

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
