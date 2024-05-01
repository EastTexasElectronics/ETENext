'use client';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { ToastAction } from '~/components/ui/toast';
import { useToast } from '~/components/ui/use-toast';
import Link from 'next/link';
import URLs from '~/utils/constants/urls';
import { z } from 'zod';
import LabelInputContainer from '../atoms/LabelInputContainer';

// Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone Number is required'),
  message: z.string().min(1, 'Message is required'),
  newsletter: z.boolean(),
  company: z.string().optional(),
});

type IFormInput = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newsletter: false, // Ensure default value is set correctly
    },
  });

  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Watch the newsletter checkbox
  const newsletterWatch = watch('newsletter');

  // Handle form submission
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.toast({
          title: 'Success!',
          description: 'Your message has been successfully sent.',
          duration: 5000,
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.toast({
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
    setIsSubmitting(false);
  };

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-secondary-300 dark:bg-secondary-900">
        <h2 className="text-xl font-bold text-center text-secondary-800 dark:text-neutral-200">Contact Us</h2>
        <p className="text-center text-secondary-600 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-5">
          We&apos;re here to help! Fill out the form below and we&apos;ll get back to you as soon as we can.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">
              First Name: <span className="text-red-700">*</span>
            </Label>
            <Input {...register('firstName')} id="firstName" placeholder="John" type="text" />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastName">
              Last Name: <span className="text-red-700">*</span>
            </Label>
            <Input {...register('lastName')} id="lastName" placeholder="Doe" type="text" />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">
              Email Address: <span className="text-red-700">*</span>
            </Label>
            <Input {...register('email')} id="email" placeholder="john.doe@example.com" type="email" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="phone">
              Phone Number: <span className="text-red-700">*</span>
            </Label>
            <Input {...register('phone')} id="phone" placeholder="555-555-5555" type="tel" />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="company">Company Name:</Label>
            <Input {...register('company')} id="company" placeholder="Acme Inc." type="text" />
          </LabelInputContainer>

          <Textarea
            {...register('message')}
            id="message"
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300 rounded-md"
          />

          <LabelInputContainer>
            <div className="flex items-center space-x-2">
              <Checkbox {...register('newsletter')} />
              <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
            </div>
            <p className="text-sm mt-2">
              By sending us a message you agree to our{' '}
              <Link href={URLs.TERMS} className="text-blue-600 underline hover:text-blue-800">
                Terms of Service
              </Link>{' '}
              and
              <Link href={URLs.PRIVACY} className="text-blue-600 underline hover:text-blue-800">
                Privacy Policy
              </Link>
              .
            </p>
          </LabelInputContainer>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message →'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
