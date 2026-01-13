import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { signUpSchema } from "@/models/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { auth } from "@/services/firebase.config";

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
    const { email, password } = form.getValues();
    console.log(form.getValues());
    // const isValid = await form.trigger();
    // if (!isValid) return;
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userData.user);
      toast.success("Account created successfully");
      navigate("/onboarding");
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
            // onClick={() => navigate("/onboarding")}
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

      <div className="hidden sm:block h-full   ">
        <img
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMHRlY2huaWNpYW58ZW58MHx8MHx8fDA%3D"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
