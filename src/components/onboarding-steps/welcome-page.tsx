import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const WelcomePage = () => {
    const navigate = useNavigate();
    const {userData} = useAuth()

  const userType = userData?.role
  console.log(userType);


  const goToDashboard = () => {
    navigate(
      userType === "vendor"
        ? "/vendor/dashboard"
        : "/client/dashboard"
    );
  };

  return (
    <div className="pt-16 w-full px-6 sm:w-[45vw] mx-auto">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Onboarding Complete!
        </h2>
        <p className="text-gray-600">
          Welcome aboard! Your account has been successfully created.
        </p>
        <div className="pt-4">
          <Button className="w-full" onClick={goToDashboard}>Go to your dashboard</Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
