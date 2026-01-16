import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { signUpSchema } from "@/models/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { auth, db, googleProvider } from "@/services/firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Calendar, MessageCircleOff, Settings } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    mode: "onChange",
  });

  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  const handleSignUpWithEmail = async () => {
    const { email, password, firstName, lastName } = form.getValues();
    console.log(form.getValues());
    const isValid = await form.trigger();
    if (!isValid) return;
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userData.user.uid;
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, {
        name: firstName + " " + lastName,
        email,
        uid,
        role: null,
        createdAt: serverTimestamp(),
        onboardingStatus: "NOT_STARTED",
      });

      toast.success("Account created successfully");
      navigate("/choose-your-user-type");
    } catch (error) {
      console.log(error);
      toast.error((error as { message: string }).message);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("google user", result.user);
      const uid = result.user.uid;
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, {
        name: result.user.displayName,
        email: result.user.email,
        uid,
        role: null,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
      toast.error((error as { message: string }).message);
    }
  };

  return (
    <div className=" grid  sm:grid-cols-2  sm:h-screen ">
      <div className="flex flex-col gap-y-8 sm:gap-y-9   ">
        <Link to={"/"} className=" px-6 pt-4 flex gap-x-1 items-center">
          <h2 className="text-2xl font-medium">reserva</h2>
        </Link>
        <form
          onSubmit={form.handleSubmit(handleSignUpWithEmail)}
          className="grid gap-y-4 px-6 sm:px-30"
        >
          <h1 className="font-semibold text-2xl">Create your account</h1>
          <div className="  grid gap-y-4 sm:gap-y-4 ">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-3">
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState }) => (
                  <FormInput
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                    dataInvalid={fieldState.invalid}
                    {...field}
                    error={errors?.firstName?.message}
                  />
                )}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FormInput
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    {...field}
                    error={errors?.lastName?.message}
                  />
                )}
              />
            </div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormInput
                  type="email"
                  label="Email Address"
                  placeholder="Email Address"
                  {...field}
                  error={errors?.email?.message}
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
                  error={errors?.password?.message}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <FormInput
                  type="password"
                  label="Confirm  Password"
                  placeholder="••••••••"
                  {...field}
                  error={errors?.confirmPassword?.message}
                />
              )}
            />

            <Button className="py-5 mt-2" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>

          <div className="flex items-center gap-x-3 w-[70%] mx-auto">
            <div className="h-[1.5px] w-full min-w-30 bg-zinc-400"></div>
            <h3 className="font-medium text-xs tracking-widest">OR</h3>
            <div className="h-px w-full min-w-30 bg-zinc-400"></div>
          </div>

          <Button
            className="w-full bg-white border hover:bg-gray-100 text-black"
            type="button"
            onClick={handleSignUpWithGoogle}
            disabled={isSubmitting}
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
              Already have an account?{" "}
              <Link to="/login" className="text-primary-blue">
                Login
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
            <Calendar className="text-primary-blue " size={20} />
            Real-time booking calendar
          </div>
          <div className="flex items-center gap-x-2">
            <MessageCircleOff className="text-primary-blue " size={20} />
            No more DMs to manage
          </div>
          <div className="flex items-center gap-x-2">
            <Settings className="text-primary-blue " size={20} />
            Built for service providers
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
