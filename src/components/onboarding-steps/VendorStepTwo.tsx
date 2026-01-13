import { serviceCategories } from "@/models/data";
import SelectInput from "../shared/SelectInput";
import FormInput from "../shared/FormInput";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import TextAreaInput from "../shared/TextAreaInput";
import { Controller, useFormContext } from "react-hook-form";

const VendorStepTwo = () => {
  const { control, formState: { errors }} = useFormContext();
  return (
    <div className="grid gap-y-4 ">
      <p className="">Step 2</p>
      <div className="grid gap-y-1">
        <h1 className="text-2xl font-medium">Add your services</h1>
        <p className="text-muted-foreground">
          You can add one or more services that your business offers.
        </p>
      </div>

      <div className="grid gap-y-4">
        <Controller
          name="serviceCategory"
          control={control}
          render={({ field }) => (
            <SelectInput
              placeholder="Select a category that match your service"
              label="Service Category"
              options={Object.values(serviceCategories).map((category) => ({
                label: category.name,
                value: category.name,
              }))}
              {...field}
              error={errors?.serviceCategory?.message as string}
            />
          )}
        />

        <Controller
          name="serviceName"
          control={control}
          render={({ field }) => (
            <FormInput
              type="text"
              label="Service Name"
              placeholder="e.g Haircut"
              {...field}
              error={errors?.serviceName?.message as string}
            />
          )}
        />

        <div className="grid grid-cols-2 gap-x-4">
          <Controller
            name="serviceDuration"
            control={control}
            render={({ field }) => (
              <FormInput
                type="number"
                label="Duration"
                placeholder="e.g 30 mins"
                 {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
               error={errors?.serviceDuration?.message as string}
              />
            )}
          />

          <Controller
            name="servicePrice"
            control={control}
            render={({ field }) => (
              <FormInput
                type="number"
                label="Price"
                placeholder="e.g $50"
                {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                error={errors?.servicePrice?.message as string}
              />
            )}
          />
        </div>

        <Controller
          name="serviceDescription"
          control={control}
          render={({ field }) => (
            <TextAreaInput
              label="Service Description"
              placeholder="Describe your service"
              optional
              {...field}
              error={errors?.serviceDescription?.message as string}
            />
          )}
        />

        <Button variant={"dotted"}>
          <PlusIcon />
          Add another service
        </Button>
      </div>

    </div>
  );
};

export default VendorStepTwo;
