import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone Number is required'),
    message: z.string().min(1, 'Message is required'),
    newsletter: z.boolean(),
    company: z.string().optional(),
    contactMethod: z.enum(['Phone Call', 'Email', 'Text']),
  });