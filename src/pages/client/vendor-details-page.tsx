import { CustomAvatar } from "@/components/shared/CustomAvatar";
import { Button } from "@/components/ui/button";
import { vendors } from "@/models/data";
import { useParams, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const VendorDetailsPage = () => {
  const { id } = useParams();
  const vendorDetail = vendors.find((vendor) => vendor.id === id);
  const navigate = useNavigate();
  return (
    <div className="grid gap-y-6 ">
      <div className="flex justify-between items-end bg-white px-4 py-7  rounded-lg">
        <div className="flex items-center gap-x-3">
          <CustomAvatar
            src={""}
            className="h-25 w-25 text-2xl  font-medium"
            fallback={`${
              vendorDetail?.businessName?.charAt(0)?.toUpperCase() || "V"
            }`}
          />
          <div className="">
            <h2 className="text-2xl font-medium leading-9">
              {vendorDetail?.businessName}
            </h2>
            <p className="text-muted-foreground">
              {vendorDetail?.businessCategory}
            </p>
          </div>
        </div>

      
      </div>

      <div className="grid grid-cols-[1.5fr_2.5fr] gap-6  ">
        <div className="grid gap-y-6">
          <div className="space-y-4 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-medium">About us</h3>
            <p className="">{vendorDetail?.description}</p>
            <div className="flex items-center gap-x-1.5">
              <FaPhone />
              {vendorDetail?.phone}
            </div>

            <div className="flex gap-x-1.5 items-center">
              <IoMdMail />
              {vendorDetail?.email}
            </div>

            
            <div className="flex gap-x-1.5 items-center">
              <MdLocationOn />
              {vendorDetail?.location}
            </div>
          </div>
          <div className="grid gap-y-3  text-sm bg-white p-4 rounded-lg">
            <h3 className="text-lg font-medium">Business Hours</h3>
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

        <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Services Offered</h3>
            <div className="grid gap-2  ">
                {vendorDetail?.services.map((service) => (
                    <div className="flex justify-between border-b py-4  items-start" key={service.id}>
                        <div className="">
                            <div className="flex gap-x-1 cursor-pointer hover:underline transition-all   ease-in hover:text-primary-blue items-center" 
                            onClick ={() => navigate(`/client/vendors/${vendorDetail.id}/services/${service.id}`)}
                            >
                                <h4 className="font-medium leading-7 hover:text-primary-blue">{service.name} </h4>
                                <MdArrowOutward className="hover:text-primary-blue"/>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {service.description}
                            </p>
                            <p className="text-sm font-semibold mt-2">₦{service.price}</p>

                        </div>

                        <Button >Book</Button>

                    </div>
                ))}

            </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailsPage;
