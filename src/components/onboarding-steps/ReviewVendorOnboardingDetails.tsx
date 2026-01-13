import { useFormContext} from "react-hook-form";
import { Button } from "../ui/button";


const ReviewVendorOnboardingDetails = ({setCurrentStep} : {setCurrentStep: React.Dispatch<React.SetStateAction<number>>}) => {
  const {  watch} = useFormContext();
  const reviewData = watch();




  return (
    <div className="grid gap-y-6 ">
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
            <Button variant="link" type='button' className="text-primary-blue" onClick={() => setCurrentStep(0)}>
              Edit
            </Button>
          </div>

          <div className="grid gap-y-4">
            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Business Name</p>
              <p className=" text-sm">{reviewData?.businessName}</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Email</p>
              <p className="text-sm">{reviewData?.businessEmail}</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Phone</p>
              <p className="text-sm">{reviewData?.businessPhoneNumber}</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Category</p>
              <p className=" text-sm capitalize">
                {reviewData?.businessCategory}
              </p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm text-muted-foreground ">Address</p>
              <p className=" text-sm">{reviewData?.businessLocation}</p>
            </div>

            <div className="grid grid-cols-[1.5fr_2fr] text-sm">
              <p className="text-sm text-muted-foreground ">Short Bio</p>
              <p className=" text-sm">
                {reviewData?.businessBio}
                {/* At Haircuilture Beauty, we are passionate about helping you look
                and feel your best. We offer a wide range of beauty services to
                help you achieve your beauty goals. */}
              </p>
            </div>
          </div>
        </div>

        <div className="shadow p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Services </h3>
            <Button variant="link" className="text-primary-blue" type='button' onClick={() => setCurrentStep(1)}>
              Edit
            </Button>
          </div>

          <div className="grid gap-y-4">
            <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] pb-4">
              <p className="text-sm  ">{reviewData?.serviceName}</p>
              <div className=" flex  gap-x-2 text-sm">
                <p className="text-muted-foreground">
             
                  ₦{reviewData?.servicePrice}
                </p>

                <p className="">{reviewData?.serviceDuration} mins</p>
              </div>
            </div>

            {/* <div className="flex items-center justify-between text-sm border-b border-[#E4E4E7] pb-4">
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
            </div> */}
          </div>
        </div>

        <div className="shadow p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Weekly Availability </h3>
            <Button variant="link" className="text-primary-blue" type='button' onClick={() => setCurrentStep(2)}>
              Edit
            </Button>
          </div>

          <div className="grid gap-y-3  text-sm">
            {/* {Object.keys(reviewData?.availability).map((day) => (
              <div className="flex justify-between border-b border-[#E4E4E7] pb-4 text-sm" key={day?.toString()} >
                <span className="capitalize">{day}</span>
                <span className={day.enabled ? "text-muted-foreground" : ""}>
                  {day?.start} - {day?.end}
                </span>
              </div>
            ))} */}

            {Object.keys(reviewData?.availability).map((day) => {
              const schedule = reviewData.availability[day];

              return (
                <div
                  className="flex justify-between border-b border-[#E4E4E7] pb-4 text-sm"
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
