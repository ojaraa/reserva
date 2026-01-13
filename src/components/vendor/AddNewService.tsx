import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import SelectInput from "../shared/SelectInput";
import { serviceCategories } from "@/models/data";
import TextAreaInput from "../shared/TextAreaInput";
import FormInput from "../shared/FormInput";

const AddNewService = () => {
  return (
   <div>
      <DialogContent className="flex flex-col sm:w-[520px] w-[95%] sm:px-6 py-8 px-6 justify-center ">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
          <VisuallyHidden>
            <DialogDescription>Add your services details</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>

        <div className="grid gap-y-5">
          <SelectInput
            label="Service Category"
            options={Object.values(serviceCategories).map((category) => ({
              label: category.name,
              value: category.name,
            }))}
          />
          <FormInput type="text" label="Service Name" placeholder="e.g Hybrid lashes"/>

          <div className="grid grid-cols-2 gap-x-4">
            <FormInput type="text" label="Duration" placeholder="In minutes" />
            <FormInput type="text" label="Price" placeholder="In Naira" />
          </div>

          <TextAreaInput label="Service Description" optional placeholder="Describe the service you are renderin in detail"  />

           <DialogFooter>
            <DialogClose>
              <Button variant="outline" className=" justify-start!">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" >
              Add Service
            </Button>
          </DialogFooter>

          
        </div>
      </DialogContent>
    </div>
  )
}

export default AddNewService