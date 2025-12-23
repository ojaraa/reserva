import { vendorServices } from "@/models/data";
import { ArrowLeft, Pencil } from "lucide-react";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdPricetag } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EditVendorServices from "@/components/vendor/EditVendorServices";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceDetail = vendorServices.find(
    (service) => service.serviceId === Number(id)
  );

  return (
    <div className="grid gap-y-6">
      <Link
        to={`/vendor/services`}
        className="flex gap-x-1 items-center cursor-pointer font-medium"
      >
        <ArrowLeft className="text-muted-foreground  " size={12} />
        <p className="text-muted-foreground  e">Back to services</p>
      </Link>

      <div className="max-w-[65vw] shadow-xs p-6 rounded-md">
        <div className="flex items-center justify-between pb-1.5">
          <h2 className="text-[30px] font-semibold">
            {serviceDetail?.serviceName}
          </h2>

          <div className="flex gap-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Pencil />
                  Edit
                </Button>
              </DialogTrigger>

              <EditVendorServices/>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"destructive"}>Delete</Button>
              </AlertDialogTrigger>

              <DeleteConfirmation
                description="Are sure you want to really delete this service"
                title="Service"
                handleDelete={() => console.log("deleted")}
              />
            </AlertDialog>
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
                {serviceDetail?.serviceCategory?.toLowerCase()}
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

        <hr />

        <div className="py-6 flex items-center justify-between">
          <div className="">
            <p className="font-medium">Service Status</p>
            <p className="">
              {serviceDetail?.status && serviceDetail?.status === "ACTIVE"
                ? "Clients can book this service"
                : "Clients cannot book this service because it is inactive. Toggle to activate."}
            </p>
          </div>

          <Switch
            checked={serviceDetail?.status === "ACTIVE"}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
