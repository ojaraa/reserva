import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { serviceCategories } from "@/models/data";
import { clientOnboardingSchema, type ClientData } from "@/models/schema";
import { db } from "@/services/firebase.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ClientOnboarding = () => {
  const methods = useForm<ClientData>({
    resolver: zodResolver(clientOnboardingSchema),
    mode: "onChange",
    defaultValues: {
      prefferedServices: [],
    },
  });

  const { register } = methods;
  const navigate = useNavigate();
  const { user } = useAuth();

  const submitForm: SubmitHandler<ClientData> = async (data) => {
    try {
      if (user?.uid) {
        const vendorsRef = doc(db, "clients", user?.uid);
        await setDoc(vendorsRef, data);

        console.log("data submitted succesfully", data);
        await updateDoc(doc(db, "users", user?.uid), {
          onboardingStatus: "COMPLETED",
        });

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" gap-y-8 h-screen flex flex-col">
      <Link to={"/"} className="pt-5 px-6 flex gap-x-1 items-center">
        <h2 className="text-2xl font-medium">reserva</h2>
      </Link>

      <form
        onSubmit={methods.handleSubmit(submitForm)}
        className="flex flex-col gap-y-8 w-full px-6 sm:w-[45vw] mx-auto pt-10"
      >
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

        <Button
          className="w-full sm:w-[45vw]"
          onClick={() => navigate("/onboarding/success")}
        >
          Complete setup
        </Button>
      </form>
    </div>
  );
};

export default ClientOnboarding;
