import { serviceCategories } from "@/models/data";
import { useFormContext } from "react-hook-form";

const ClientStepTwo = () => {
  const { register , formState: { errors }} = useFormContext();
    console.log(errors);
  return (
    <div className="grid gap-y-6 w-[40vw] ">
      <div className="grid gap-y-2">
        <h1 className="text-2xl font-medium">Set up your experience</h1>
        <p className="text-muted-foreground">
          Personalize your recommendations by telling us what you are looking
          for, you can always change it later.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-2.5 gap-y-3 ">
        {Object.values(serviceCategories).map((service) => (
          <label key={service.id} className="inline-block">
            <input
              type="checkbox"
              value={service.name}
              {...register("prefferedServices")}
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
    </div>
  );
};

export default ClientStepTwo;
