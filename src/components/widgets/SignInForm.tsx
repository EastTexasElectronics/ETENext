'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { cn } from '~/utils/utils';
import { ToastAction } from '~/components/ui/toast';
import { useToast } from '~/components/ui/use-toast';

// Define the form inputs' structure, if not already defined
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone: string;
  contactReason: 'General' | 'Service' | 'Product' | 'Other';
  contactMethod: 'Phone' | 'Text' | 'Email';
  message: string;
  newsletter: boolean;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your message has been successfully sent.',
          duration: 5000,
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        action: (
          <ToastAction onClick={() => onSubmit(data)} altText="Try again">
            Try again
          </ToastAction>
        ),
        duration: 5000,
      });
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-secondary-300 dark:bg-secondary-900">
      <h2 className="text-xl font-bold text-center text-secondary-800 dark:text-neutral-200">Contact Us</h2>
      <p className="text-center text-secondary-600 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-5">
        Were here to help! Fill out the form below and well get back to you as soon as we can.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">First Name:</Label>
            <Input {...register('firstName')} id="firstName" placeholder="John" type="text" />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input {...register('lastName')} id="lastName" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address:</Label>
          <Input {...register('email')} id="email" placeholder="john.doe@example.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input {...register('phone')} id="phone" placeholder="555-555-5555" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="company">Company Name:</Label>
          <Input {...register('company')} id="company" placeholder="Acme Inc." type="text" />
        </LabelInputContainer>
        <BottomGradient />
        <RadioGroup className="flex space-x-4">
          <div className="flex items-center">
            <RadioGroupItem {...register('contactReason')} value="General" id="general" />
            <Label htmlFor="general">General</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem {...register('contactReason')} value="Service" id="service" />
            <Label htmlFor="service">Service</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem {...register('contactReason')} value="Product" id="product" />
            <Label htmlFor="product">Product</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem {...register('contactReason')} value="Other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
        <RadioGroup className="flex space-x-4">
          <div className="flex items-center">
            <RadioGroupItem {...register('contactMethod')} value="Phone" id="contactMethodPhone" />
            <Label htmlFor="contactMethodPhone">Phone</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem {...register('contactMethod')} value="Text" id="contactMethodText" />
            <Label htmlFor="contactMethodText">Text</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem {...register('contactMethod')} value="Email" id="contactMethodEmail" />
            <Label htmlFor="contactMethodEmail">Email</Label>
          </div>
        </RadioGroup>
        <BottomGradient />
        <Textarea
          {...register('message')}
          id="message"
          placeholder="Your message..."
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <LabelInputContainer>
          <Label>
            Subscribe to our newsletter
            <input type="checkbox" {...register('newsletter')} defaultChecked={true} />
          </Label>
        </LabelInputContainer>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </Button>
        <BottomGradient />
      </form>
    </div>
  );
}
export default ContactForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
