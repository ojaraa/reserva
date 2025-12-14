import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const LandingPage = () => {
  
  return (
    <div className="grid gap-6">
      <Navbar showNavLink={true} />

      <div className="flex flex-col gap-y-6 items-center justify-center min-h-[70vh]">
        <div className="w-[50vw] text-center grid gap-y-3">
          <h1 className="text-[45px] font-bold leading-14  ">
            {/* Manage Your Calendar, Services, and Clients in One Place */}
            The simplest way to book and manage appointments online.
          </h1>
          <p className="w-3/4 mx-auto text-base text-muted-foreground">
            Stop the manual back-and-forth messaging. Start providing a
            professional, smooth booking experience instantly.
          </p>

          <div className="flex items-center justify-center gap-4 mt-2">
            <Link to="signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>

        {/* <div className="w-[70vw] grid grid-cols-2"> */}
        <div className=" h-[300px]">
          <img src="/assets/images/calendar.svg" className="w-full h-full" />
        </div>

        {/* <div className="  h-[300px]">
            <img src="/assets/images/calendar2.svg" className="w-full h-full" />
          </div> */}
      </div>
    </div>
    // </div>
  );
};

export default LandingPage;
