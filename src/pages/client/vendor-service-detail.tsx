import { Button } from "@/components/ui/button";
import { vendors } from "@/models/data";
// import { ArrowLeft } from "lucide-react";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdPricetag } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import {  useParams } from "react-router-dom";

const VendorServiceDetail = () => {
  const { serviceId } = useParams();
  const serviceDetail = vendors.map(vendor => vendor.services).flat(1).find(service => service.id === serviceId);
//   .services.find((service) => service.serviceId === serviceId);
  return (
    <div className="grid gap-y-6 ">
      {/* <Link
        to={`/-1`}
        className="flex gap-x-1 items-center cursor-pointer font-medium"
      >
        <ArrowLeft className="text-muted-foreground  " size={12} />
        <p className="text-muted-foreground  e">Back to vendor</p>
      </Link> */}

      <div className="max-w-[65vw] shadow-xs p-6 rounded-md bg-white">
        <div className="flex items-center justify-between pb-1.5">
          <h2 className="text-[30px] font-semibold">
            {serviceDetail?.name}
          </h2>

          <div className="flex gap-x-2">
            <Button >Book this service</Button>
          </div>
        </div>

        <p className="text-muted-foreground leading-6.5 mb-4">
          {serviceDetail?.description}
        </p>

        <hr />

        <div className="grid grid-cols-2 py-6 gap-6">
          <div className="flex gap-x-2 items-start">
            <TbCategory className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Category</p>
              <p className="capitalize">
                {serviceDetail?.category?.toLowerCase()}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-start">
            <GiSandsOfTime className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Duration</p>
              <p className="">
                {serviceDetail?.duration && serviceDetail?.duration > 60
                  ? `${serviceDetail?.duration / 60} hours`
                  : `${serviceDetail?.duration} minutes`}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-start">
            <IoMdPricetag className="mt-1.5" />
            <div className="grid gap-y-1">
              <p className="text-muted-foreground">Price</p>
              <p className="">₦{serviceDetail?.price}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VendorServiceDetail;
