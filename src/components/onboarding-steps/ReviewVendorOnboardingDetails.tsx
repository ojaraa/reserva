import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";

const ReviewVendorOnboardingDetails = ({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { watch } = useFormContext();
  const reviewData = watch();

  return (
    <div className=" animate-in fade-in slide-in-from-bottom-4 duration-500 mx-auto w-full md:w-[70vw] space-y-6 ">
      <div className="grid gap-y-2">
        <h1 className="text-2xl font-medium">Summary</h1>
        <p className="text-muted-foreground">
          Review your information before completing the setup.
        </p>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 md:px-0 py-12 md:p-8  rounded-3xl bg-white shadow-sm border border-slate-100">
        <div className="space-y-6">
          <div className="md:shadow  p-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Business Details</h3>
              <Button
                variant="link"
                type="button"
                className="text-primary-blue"
                onClick={() => setCurrentStep(0)}
              >
                Edit
              </Button>
            </div>

            <div className="grid gap-y-4  ">
              <div className="flex justify-between items-center text-sm border-b border-[#E4E4E7] last:border-b-0 pb-4">
                <p className="text-sm text-muted-foreground ">Business Name</p>
                <p className=" text-sm">{reviewData?.businessName}</p>
              </div>

              {reviewData?.businessEmail && (
                <div className="flex justify-between items-center] text-sm border-b border-[#E4E4E7] last:border-b-0 pb-4">
                  <p className="text-sm text-muted-foreground ">Email</p>
                  <p className="text-sm">{reviewData?.businessEmail}</p>
                </div>
              )}

              {reviewData?.businessPhoneNumber && (
                <div className="flex justify-between items-center] text-sm border-b border-[#E4E4E7]  last:border-b-0 pb-4">
                  <p className="text-sm text-muted-foreground ">Phone</p>
                  <p className="text-sm">{reviewData?.businessPhoneNumber}</p>
                </div>
              )}

              <div className="flex justify-between items-center] text-sm border-b border-[#E4E4E7] last:border-b-0 pb-4">
                <p className="text-sm text-muted-foreground ">Category</p>
                <p className=" text-sm capitalize">
                  {reviewData?.businessCategory}
                </p>
              </div>

              {reviewData?.businessLocation && (
                <div className="flex justify-between items-center] text-sm border-b border-[#E4E4E7] last:border-b-0 pb-4">
                  <p className="text-sm text-muted-foreground ">Address</p>
                  <p className=" text-sm">{reviewData?.businessLocation}</p>
                </div>
              )}

              {reviewData?.businessBio && (
                <div className="flex justify-between items-center] text-sm">
                  <p className="text-sm text-muted-foreground ">Short Bio</p>
                  <p className=" text-sm">{reviewData?.businessBio}</p>
                </div>
              )}
            </div>
          </div>

          <div className="md:shadow p-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Services </h3>
              <Button
                variant="link"
                className="text-primary-blue"
                type="button"
                onClick={() => setCurrentStep(1)}
              >
                Edit
              </Button>
            </div>

            <div className="grid gap-y-4">
              <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] last:border-b-0 pb-4">
                <p className="text-sm  ">{reviewData?.serviceName}</p>
                <div className=" flex  gap-x-2 text-sm">
                  <p className="text-muted-foreground">
                    ₦{reviewData?.servicePrice}
                  </p>

                  <p className="">{reviewData?.serviceDuration} mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:shadow p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Weekly Availability </h3>
            <Button
              variant="link"
              className="text-primary-blue"
              type="button"
              onClick={() => setCurrentStep(2)}
            >
              Edit
            </Button>
          </div>

          <div className="grid gap-y-3  text-sm">
            {Object.keys(reviewData?.availability).map((day) => {
              const schedule = reviewData.availability[day];

              return (
                <div
                  className="flex justify-between border-b border-[#E4E4E7] last:border-b-0 pb-4 text-sm"
                  key={day}
                >
                  <span className="capitalize">{day}</span>
                  <span
                    className={schedule.enabled ? "" : "text-muted-foreground"}
                  >
                    {schedule.enabled
                      ? `${schedule.start} - ${schedule.end}`
                      : "Closed"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewVendorOnboardingDetails;
