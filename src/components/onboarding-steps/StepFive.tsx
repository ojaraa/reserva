import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const VendorStepFive = ({ prevStep }: { prevStep: () => void }) => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-y-6 w-[50vw]">
      <div className="grid gap-y-2">
        <h1 className="text-2xl font-medium">Summary</h1>
        <p className="text-muted-foreground">
          Review your information before completing the setup.
        </p>
      </div>

      <div className="space-y-6">
        <div className="shadow p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Business Details</h3>
            <Button variant="link" className="text-primary-blue">
              Edit
            </Button>
          </div>

          <div className="grid gap-y-4">
            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Business Name</p>
              <p className=" text-sm">Haircuilture Beauty</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Email</p>
              <p className="text-sm">hairculturebeauty@gmail.com</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Phone</p>
              <p className="text-sm">070764828902</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Category</p>
              <p className=" text-sm">Beauty — Lash Tech, Makeup Artist</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Address</p>
              <p className=" text-sm">12 Admiralty Way, Lekki Phase 1, Lagos</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm">
              <p className="text-sm text-muted-foreground ">Short Bio</p>
              <p className=" text-sm">
                At Haircuilture Beauty, we are passionate about helping you look
                and feel your best. We offer a wide range of beauty services to
                help you achieve your beauty goals.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Services </h3>
            <Button variant="link" className="text-primary-blue">
              Edit
            </Button>
          </div>

          <div className="grid gap-y-4">
            <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm  ">Classic lashes</p>
              <div className=" flex  gap-x-2 text-sm">
                <p className="text-muted-foreground"> ₦10,000</p>

                <p className=""> 60mins</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm  ">Frontall installation</p>
              <div className=" flex  gap-x-2 text-sm">
                <p className="text-muted-foreground"> ₦25,000</p>

                <p className=""> 60mins</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm ">
              <p className="text-sm  ">Wig Revamping</p>
              <div className=" flex  gap-x-2 text-sm">
                <p className="text-muted-foreground"> ₦12,000</p>

                <p className=""> 120mins</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Weekly Availability </h3>
            <Button variant="link" className="text-primary-blue">
              Edit
            </Button>
          </div>

          <div className="grid gap-y-3  text-sm">
            {[
              ["Monday", "09:00 AM – 05:00 PM"],
              ["Tuesday", "09:00 AM – 05:00 PM"],
              ["Wednesday", "Closed", true],
              ["Thursday", "10:00 AM – 06:00 PM"],
              ["Friday", "09:00 AM – 05:00 PM"],
              ["Saturday", "Closed", true],
              ["Sunday", "Closed", true],
            ].map(([day, time, closed]) => (
              <div className="flex justify-between border-b border-[#E4E4E7] pb-4 text-sm">
                <span className="">{day}</span>
                <span className={closed ? "text-muted-foreground" : ""}>
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-5 justify-end">
          <Button type="button" onClick={prevStep} variant="outline">
            Back
          </Button>
          <Button
            //   type="button"
            onClick={() => navigate("/vendor/dashboard")}
          >
            Complete setup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorStepFive;
