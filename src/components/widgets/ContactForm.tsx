'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { IFormInput } from '~/shared/types';
import { ContactInfoCard } from '~/components/widgets/ContactInfoCard';
import { ServiceAreaMap } from '~/components/widgets/ServiceAreaMap';

// Define the form schema using Zod for form validation
const contactFormSchema = z.object({
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  contactReason: z.enum(['General', 'Service', 'Product', 'Other']),
  contactMethod: z.enum(['Phone', 'Text', 'Email']),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  newsletter: z.boolean(),
});

export function ContactUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched', // This mode validates the input when it is touched/blurred
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Submitted Data:', data); // Logs the form data to the console on form submission
  };

  return (
    <><div>
      <h1 className="text-3xl font-bold text-center md:text-left">Contact Us</h1>
      <p className="text-lg">We&apos;re here to help and answer any question you might have.</p>
    </div><div className="flex flex-col md:flex-row gap-10 p-5 bg-white dark:bg-secondary-500 text-secondary-950 dark:text-secondary-100 shadow rounded-lg">
        <div className="md:w-1/2 space-y-4">
          <ContactInfoCard />
          <ServiceAreaMap />
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              {...register('firstName')}
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-md" />
            <Input
              {...register('lastName')}
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-md" />
            <Input
              {...register('email')}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md" />
            <Input
              {...register('company')}
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-md" />
            <Input
              {...register('phone')}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md" />

            <h3 className="font-semibold">Reason for Contact</h3>
            <RadioGroup
              onValueChange={(value) => setValue('contactReason', value as any)}
              value={watch('contactReason')}
              className="space-y-2"
            >
              <div className="flex items-center">
                <RadioGroupItem value="General" id="general" />
                <Label htmlFor="general">General Inquiries</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="Service" id="service" />
                <Label htmlFor="service">Service Support</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="Product" id="product" />
                <Label htmlFor="product">Product Information</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="Other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>

            <Textarea
              {...register('message')}
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-md" />
            <Checkbox {...register('newsletter')} defaultChecked />
            <Label htmlFor="newsletter">
              Stay in the loop with exclusive updates! Sign up for our newsletter today.
            </Label>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </Button>
          </form>
        </div>
      </div></>
  );
}

export default ContactUsForm;
