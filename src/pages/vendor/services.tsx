import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import AddNewService from "@/components/vendor/AddNewService";
import EditVendorServices from "@/components/vendor/EditVendorServices";
import { vendorServices } from "@/models/data";
import { EllipsisVerticalIcon, Eye, Pencil, Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const tableTitle = [
  { name: "Name" },
  { name: "Category" },
  { name: "Duration" },
  { name: "Price" },
  { name: "Status" },
  { name: "" },
];

const VendorServices = () => {
  return (
    <div className="grid gap-y-6 ">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-medium text-2xl leading-6 pb-2">
            Manage your services
          </h1>
          <p className="text-muted-foreground text-xs">
            Here you can add, edit and manage all your services offered to
            clients
          </p>
        </div>

        <div className="flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus />
                Add New Service
              </Button>
            </DialogTrigger>

            <AddNewService />
          </Dialog>
        </div>
      </div>

      <div className="overflow-x">
        <table className=" w-full table-auto divide-y ">
          <thead className="bg-[#F9FAFB] w-full">
            <tr>
              {tableTitle.map((title) => (
                <th
                  scope="col"
                  key={title.name}
                  className=" whitespace-nowrap py-2 text-start px-6"
                >
                  <span className="text-xs text-[#344054] leading-[16.2px] whitespace-nowrap font-normal">
                    {title.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y leading-6">
            {vendorServices.slice(0, 8).map((service) => {
              // const statusStyles =
              //   AppointmentStatus[
              //     service?.status as AppointmentStatusKey
              //   ];
              return (
                <tr key={service?.serviceId}>
                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs text-grey-50 truncate">
                        {service?.serviceName}
                      </span>
                    </div>
                  </td>

                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        {service?.serviceCategory}
                      </span>
                    </div>
                  </td>

                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        {service?.duration && service?.duration > 60
                          ? `${service?.duration / 60} hours`
                          : `${service?.duration}minutes`}
                      </span>
                    </div>
                  </td>

                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-xs text-grey-50 truncate">
                        ₦{service?.price}
                      </span>
                    </div>
                  </td>

                  <td className="size-px whitespace-nowrap font-normal">
                    <div className="px-6 py-3 truncate">
                      <span className="text-[10px] text-grey-50 truncate">
                        <div className=" w-fit px-2 text-[10px] ">
                          <Switch
                            checked={service.status === "ACTIVE"}
                            className="cursor-pointer"
                          />
                        </div>
                      </span>
                    </div>
                  </td>

                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-1.5">
                      <Popover>
                        <PopoverTrigger asChild>
                          <EllipsisVerticalIcon className="size-4 text-[rgba(71,83,103,1)] cursor-pointer" />
                        </PopoverTrigger>

                        <PopoverContent className="flex flex-col gap-y-2 px-2.5 py-4 w-full rounded-lg max-w-[300px]! min-w-[180px] shadow-lg bg-white transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0">
                          <Link
                            to={`/vendor/services/${service?.serviceId}`}
                            className="flex items-center gap-x-1.5 text-xs hover:bg-muted  py-2 px-3 rounded-md text-base-grey cursor-pointe"
                          >
                            <Eye className="" size={16} />
                            View
                          </Link>

                          <>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="flex items-center gap-x-1.5 text-xs hover:bg-muted  py-2 px-3 rounded-md text-base-grey cursor-pointer">
                                  <Pencil size={14} />
                                  Edit
                                </div>
                              </DialogTrigger>

                              <EditVendorServices />
                            </Dialog>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <div className="flex  text-red-500 items-center gap-x-1.5 text-xs hover:bg-muted  py-2 px-3 rounded-md cursor-pointer ">
                                  <Trash className="text-red-500" size={14} />
                                  Delete
                                </div>
                              </AlertDialogTrigger>

                              <DeleteConfirmation
                                description="Are sure you want to really delete this service"
                                title="Service"
                                handleDelete={() => console.log("deleted")}
                              />
                            </AlertDialog>
                          </>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorServices;
