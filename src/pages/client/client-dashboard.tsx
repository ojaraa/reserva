import ClientUpcomingAppointment from "@/components/client/ClientUpcomingAppointment";
import Recommendedvendor from "@/components/client/Recommendedvendor";
import TodayAppointment from "@/components/client/TodayAppointment";

const ClientDashboard = () => {
  return (
    <div className="flex flex-col gap-y-10 px-2 ">
      <div>
        {/* <p className="text-base text-[#ABABB9] font-medium">
          {" "}
          Hello, Favour 👋
        </p> */}
        <h1 className="text-2xl font-bold leading-7">
          {/* Here’s what’s coming up */}
            Hello, Favour 👋
        </h1>
      </div>

      <ClientUpcomingAppointment />
      <div className="grid grid-cols-[1.5fr_1fr] gap-8">
        <Recommendedvendor />
        <TodayAppointment />
      </div>
    </div>
  );
};

export default ClientDashboard;
