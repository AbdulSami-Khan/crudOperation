import { z } from "zod";

export const EmployeeSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "lastname must be at least 2 characters.",
  }),
  email: z.string().email(),
  phoneNumber: z.string().min(11, {
    message: "Phone Number must be at least 11 digits.",
  }),
});
