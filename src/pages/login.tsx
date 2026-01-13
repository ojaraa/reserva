import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      <div className=" flex  flex-col gap-y-9  ">
        <Link to={"/"} className="pt-4 px-6 flex gap-x-1 items-center">
          <h2 className="text-2xl font-medium">reserva</h2>
        </Link>
        <div className="space-y-6 px-6 sm:px-30">
          <h1 className="font-semibold text-2xl">Log into your account</h1>
          <div className="grid gap-y-6 ">
            <FormInput
              type="email"
              label="Email Address"
              placeholder="Email Address"
            />
            <FormInput
              type="password"
              label="Password"
              placeholder="••••••••"
            />

            <Button
              className="py-5 mt-2"
              onClick={() => navigate("/onboarding")}
            >
              Login
            </Button>
          </div>

          <div className="flex items-center gap-x-3 w-[70%] mx-auto">
            <div className="h-[1.5px] w-full min-w-30 bg-zinc-400"></div>
            <h3 className="font-medium text-xs tracking-widest">OR</h3>
            <div className="h-px w-full min-w-30 bg-zinc-400"></div>
          </div>

          <Button
            className="w-full bg-white border hover:bg-gray-100 mt-4 text-black"
            onClick={() => navigate("/onboarding")}
          >
            <img
              src={`/assets/images/google.png`}
              alt="Google"
              width={15}
              height={15}
            />
            Continue with Google
          </Button>

          <div className="">
            <p className="text-center text-sm text-deep-gray">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary-blue">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block h-full ">
        <img
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMHRlY2huaWNpYW58ZW58MHx8MHx8fDA%3D"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default LoginPage;
