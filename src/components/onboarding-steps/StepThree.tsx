import { serviceCategories } from "@/models/data";
import SelectInput from "../shared/SelectInput";
import FormInput from "../shared/FormInput";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import TextAreaInput from "../shared/TextAreaInput";

const VendorStepThree = ({
  prevStep,
  nextStep,
}: {
  prevStep: () => void;
  nextStep: () => void;
}) => {
  return (
    <div className="grid gap-y-4 w-[40vw]">
      <p className="">Step 3</p>
      <div className="grid gap-y-1">
        <h1 className="text-2xl font-medium">Add your services</h1>
        <p className="text-muted-foreground">
          You can add one or more services that your business offers.
        </p>
      </div>

      <div className="grid gap-y-4">
        <SelectInput
          placeholder="Select a category that match your service"
          label="Service Category"
          options={Object.values(serviceCategories).map((category) => ({
            label: category.name,
            value: category.name,
          }))}
        />
        <FormInput type="text" label="Service Name" placeholder="e.g Haircut" />

        <div className="grid grid-cols-2 gap-x-4">
          <FormInput type="text" label="Duration" placeholder="e.g 30 mins" />

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

      <div className="flex justify-between mt-2">
        <Button onClick={nextStep} className="w-full">
          Next
        </Button>
      </div>

      <Button variant="ghost" onClick={prevStep}>
        Back
      </Button>
    </div>
  );
};

export default VendorStepThree;
