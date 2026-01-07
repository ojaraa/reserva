import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { serviceCategories } from "@/models/data";

const ClientStepTwo = ({ prevStep }: { prevStep: () => void }) => {
  const navigate = useNavigate();
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

        <Button onClick={() => navigate("/client/dashboard")}>
          Finish Setup
        </Button>
      </div>
    </div>
  );
};

export default ClientStepTwo;
