import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@/hooks/useAuth";
import type { UserData } from "@/models/interface";
import { loginSchema } from "@/models/schema";
import { auth, db } from "@/services/firebase.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Calendar, MessageCircleOff, Settings,} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const navigate = useNavigate();

  const handleLoginWithEmailAndPassword = async () => {
    const { email, password } = form.getValues();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.data() as UserData | null;
      const userType = userData?.role;
      if (userData) {
        const nextRoute =
          userData?.onboardingStatus === "COMPLETED"
            ? `/${userType}/dashboard`
            : "/choose-your-user-type";
        navigate(nextRoute);
      }
    } catch (error) {
      console.log(error);
      toast.error((error as { message: string }).message);
    }
  };

  const {
    control,
    formState: { errors, isSubmitting },
  } = form;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      <div className=" flex  flex-col gap-y-9  ">
        <Link to={"/"} className="pt-4 px-6 flex gap-x-1 items-center">
          <h2 className="text-2xl font-medium">reserva</h2>
        </Link>
        <form
          onSubmit={form.handleSubmit(handleLoginWithEmailAndPassword)}
          className="space-y-6 px-6 sm:px-30"
        >
          <h1 className="font-semibold text-2xl">Log into your account</h1>
          <div className="grid gap-y-6 ">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormInput
                  type="email"
                  label="Email Address"
                  placeholder="Email Address"
                  {...field}
                  error={errors?.email?.message as string}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormInput
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                  {...field}
                  error={errors?.password?.message as string}
                />
              )}
            />

            <Button className="py-5 mt-2" type="submit">
              {isSubmitting ? "Logging in..." : "Login"}
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
        </form>
      </div>

      <div className="hidden sm:block  lg:flex items-center flex-col justify-center h-full bg-slate-50   relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-md relative z-10">
          <div className="p-8 rounded-[2.5rem]  mb-10">
            <p className="text-xl font-bold">
              Booking, without the back-and-forth
            </p>
            <p className="text-xl font-medium text-slate-800 leading-relaxed mb-6 italic">
              Manage availability, receive booking requests, and stay organized
              in one place.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-x-2">
            <Calendar className="text-primary-blue "size={20}/>
            Real-time booking calendar
          </div>
          <div className="flex items-center gap-x-2">
            <MessageCircleOff className="text-primary-blue "size={20} />
            No more DMs to manage
          </div>
          <div className="flex items-center gap-x-2">
            <Settings className="text-primary-blue "size={20}/>
            Built for service providers
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
