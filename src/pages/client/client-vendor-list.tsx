import SearchInput from "@/components/shared/SearchInput";
import SelectInput from "@/components/shared/SelectInput";
import { Button } from "@/components/ui/button";
import { serviceCategories, vendors } from "@/models/data";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const ClientVendorList = () => {
    const navigate = useNavigate();
  return (
    <div className="grid gap-y-6">
      <div className="">
        <h2 className="text-2xl font-medium leading-9">Vendors</h2>
        <p className="text-muted-foreground">
          Browse and manage your vendors all in one place.
        </p>
      </div>

      <div className="grid grid-cols-[2fr_1fr] items-center gap-4">
        <SearchInput
          placeholder="Search service providers"
          borderClass="max-w-full!"
        />
        <SelectInput
          options={Object.values(serviceCategories).map((category) => ({
            label: category.name,
            value: category.name,
          }))}
        />
      </div>

      <div className="grid grid-cols-3  gap-6">
        {vendors.map((vendor) => (
          <div className="px-4 py-5 rounded-[6px] bg-white" key={vendor.id}>
            <h4 className="font-medium text-sm leading-7 ">
              {vendor?.businessName}
            </h4>
            <p className="text-muted-foreground text-xs">
              {vendor?.businessCategory}
            </p>
            <div className="flex items-center gap-x-1 mt-2">
              <HiStar
                size={12}
                className=""
                color="oklch(82.8% 0.189 84.429)"
              />
              <p className="text-xs">{vendor?.rating}</p>
            </div>
            <div className="flex items-center gap-x-2  mt-3">
              <Button variant="outline" size="sm" className="text-xs" onClick={() => navigate(`/client/vendors/${vendor.id}`)}>
                View Profile
              </Button>

              <Button size="sm" className="text-xs " onClick={() => navigate(`/client/vendors/${vendor.id}/book-appointment`)}>
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientVendorList;
