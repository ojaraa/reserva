import { Controller, useFormContext } from "react-hook-form";
import FormInput from "../shared/FormInput";
import SelectInput from "../shared/SelectInput";
import TextAreaInput from "../shared/TextAreaInput";

const VendorStepOne = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="grid gap-y-6 ">
      <p className="mb-6">Step 1</p>
      <div className="grid gap-y-2">
        <h1 className="text-2xl font-medium">Tell us about your business</h1>
        <p className="text-muted-foreground">
          Let's get your profile set up, you can always change it later
        </p>
      </div>

      <div className="grid gap-y-5">
        <Controller
          name="businessName"
          control={control}
          render={({ field }) => (
            <FormInput
              type="text"
              label="Business Name"
              placeholder="e.g Haircuilture salon"
              {...field}
              error={errors?.businessName?.message as string}
            />
          )}
        />

        <Controller
          name="businessCategory"
          control={control}
          render={({ field }) => (
            <SelectInput
              label="Business Category"
              placeholder="Select Category"
              options={categories}
              {...field}
              error={errors?.businessCategory?.message as string}
            />
          )}
        />

        <Controller
          name="businessPhoneNumber"
          control={control}
          render={({ field }) => (
            <FormInput
              type="text"
              label="Business phone number"
              placeholder="e.g +1 234 567 890"
              {...field}
              error={errors?.businessPhoneNumber?.message as string}
            />
          )}
        />

         <Controller
          name="businessEmail"
          control={control}
          render={({ field }) => (
            <FormInput
              type="email"
              label="Business email address"
              placeholder="email@business.com"
              {...field}
              error={errors?.businessEmail?.message as string}
            />
          )}
        />

        <Controller
          name="businessLocation"
          control={control}
          render={({ field }) => (
            <FormInput
              type="text"
              label="Business location"
              placeholder="e.g Lagos, Nigeria"
              optional
              {...field}
              error={errors?.businessLocation?.message as string}
            />
          )}
        />

        <Controller
          name="businessBio"
          control={control}
          render={({ field }) => (
            <TextAreaInput
              label="Bio"
              placeholder="Add a short bio about your business"
              optional
              {...field}
              error={errors?.businessBio?.message as string}
            />
          )}
        />
      </div>
    </div>
  );
};

export default VendorStepOne;

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
