import * as z from "zod"

export const signUpSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
})


export const baseSchema = z.object({
  userType: z.enum(["client", "vendor"], {
    message: "Please choose a user type",
  }),
});

export const vendorSchema = z.object({
    businessName: z.string().min(1, "Business Name is required"),
    businessCategory: z.string().min(1, "Business Category is required"),
    businessPhoneNumber: z.string().min(1, "Business Phone Number is required"),
    businessLocation: z.string().optional(),

})