import { vendors } from "@/models/data";
import { Button } from "../ui/button";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Recommendedvendor = () => {
  return (
    <div className="space-y-4">
     <div className="flex items-center justify-between">
         <h2 className="text-base font-medium ">Featured vendors</h2>
         <Link to={"/clients/vendors"} className="text-xs text-primary-blue font-medium ml-auto">
         View all vendors         </Link>
     </div>
      <div className="grid grid-cols-2  gap-5">
        {vendors.slice(0, 2).map((vendor) => (
          <div className="px-3 py-5 shadow-sm rounded-[5px]" key={vendor.id}>
            <h4 className="font-medium text-sm leading-7 ">{vendor?.businessName}</h4>
            <p className="text-muted-foreground text-xs">
              {vendor?.businessCategory}
            </p>
            <div className="flex items-center gap-x-1 mt-2">
                <HiStar size={12} className="" color="oklch(82.8% 0.189 84.429)"/>
                <p className="text-xs">{vendor?.rating}</p>
            </div>
            <div className="flex items-center gap-x-2  mt-3">
              <Button variant="outline" size="sm" className="text-xs">
                View Profile
              </Button>

              <Button size="sm" className="text-xs " variant={"border"}>
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendedvendor;
