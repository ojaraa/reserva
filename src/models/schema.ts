import * as z from "zod";

export const signUpSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters long"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
});

export const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const userTypeSchema = z.object({
  userType: z.enum(["client", "vendor"], {
    message: "Please choose how you want to use Reserva",
  }),
});

const timeSchema = z
  .string()
  .regex(/^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i, "Invalid time");

const daySchema = z.object({
  enabled: z.boolean(),
  start: timeSchema,
  end: timeSchema,
});

export const clientOnboardingSchema = z.object({
  prefferedServices: z.array(z.string().optional()),
});

export const vendorOnboardingSchema = z.object({
  businessName: z.string().min(1, "Business Name is required"),
  businessCategory: z.string().min(1, "Business Category is required"),
  businessEmail: z.email("Enter a valid email address"),
  businessPhoneNumber: z.string().min(1, "Business Phone Number is required"),
  businessLocation: z.string().optional(),
  businessBio: z.string().optional(),

  serviceCategory: z.string().min(1, "Service Category is required"),
  serviceName: z.string().min(1, "Service Name is required"),
  serviceDuration: z
    .number("Duration is required")
    .min(1, "Duration must be more than 0 mins"),
  servicePrice: z.number().min(1, "Price must be greater than 0"),
  serviceDescription: z.string().optional(),

  availability: z.object({
    monday: daySchema,
    tuesday: daySchema,
    wednesday: daySchema,
    thursday: daySchema,
    friday: daySchema,
    saturday: daySchema,
    sunday: daySchema,
  }),
});

export type FormData = z.infer<typeof vendorOnboardingSchema>;

export type UserType = z.infer<typeof userTypeSchema>;
export type ClientData = z.infer<typeof clientOnboardingSchema>;
