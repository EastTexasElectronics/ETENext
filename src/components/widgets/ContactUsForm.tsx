'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { ToastAction } from '~/components/ui/toast';
import { useToast } from '~/components/ui/use-toast';
import Link from 'next/link';
import URLs from '~/utils/constants/urls';
import { z } from 'zod';
import LabelInputContainer from '../atoms/LabelInputContainer';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import ServiceAreaMap from '../../assets/images/ServiceAreaMap.png';
import LargeServiceAreaMap from '../../assets/images/LargeServiceAreaMap.png';
import { IconPhone, IconMail, IconGlobe } from '@tabler/icons-react';

const formSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone Number is required'),
  message: z.string().min(1, 'Message is required'),
  newsletter: z.boolean(),
  company: z.string().optional(),
  contactMethod: z.enum(['Phone Call', 'Email', 'Text']),
});

type IFormInput = z.infer<typeof formSchema>;

export function ContactUsForm() {
  const [isMapOpen, setMapOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newsletter: false,
    },
  });

  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleMap = () => setMapOpen(!isMapOpen);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log('Form data submitted:', data);
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
    <div className="grid grid-cols-2 gap-4 p-4 max-w-6xl mx-auto">
      <div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-4">
        <div className="row-span-1">
          {/* Contact Info Card */}
          <Card className="shadow-lg rounded-xl p-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contact Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <IconPhone className="text-primary-500 mr-2" />
                  <p>
                    Phone:{' '}
                    <a href="phone:+19034711575" className="text-blue-500 hover:text-blue-600">
                      (903)-471-1575
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <IconMail className="text-primary-500 mr-2" />
                  <p>
                    Email:{' '}
                    <a href="mailto:contact@EastTexasElectronics.com" className="text-blue-500 hover:text-blue-600">
                      contact@EastTexasElectronics.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <IconGlobe className="text-primary-500 mr-2" />
                  <p>
                    Online Shop:{' '}
                    <Link href="http://www.EastTexasElectronics.com" className="text-blue-500 hover:text-blue-600">
                      EastTexasElectronics.com
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="row-span-1">
          {/* Service Areas */}
          <Card className="shadow-lg rounded-xl p-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Service Area</CardTitle>
              <p>Free travel within 10 miles of our location; $0.87/mile travel fee beyond.</p>
            </CardHeader>
            <CardContent onClick={toggleMap} className="cursor-pointer hover:opacity-80">
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image src={ServiceAreaMap} alt="Service Area Map" layout="fill" objectFit="contain" />
              </div>
              {isMapOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                  onClick={() => setMapOpen(false)}
                >
                  <div className="p-4 rounded-lg max-w-3xl w-full relative">
                    <button
                      className="absolute top-2 right-2 text-lg font-bold text-red-500"
                      onClick={() => setMapOpen(false)}
                    >
                      &times;
                    </button>
                    <div style={{ position: 'relative', width: 'auto', height: '80vh' }}>
                      <Image src={LargeServiceAreaMap} alt="Large Service Area Map" layout="fill" objectFit="contain" />
                    </div>
                    <button className="mt-2 text-sm text-blue-700 hover:text-blue-900 font-semibold block mx-auto py-2 px-4 bg-gray-200 rounded">
                      Close Map
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        {/* Contact Form */}
        <div className="rounded-none md:rounded-2xl shadow-input dark:bg-secondary-900 bg-primary-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4 md:p-8">
          <h2 className="text-xl font-bold text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              {' '}
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
            </div>
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
            <LabelInputContainer>
              <Label htmlFor="contactMethod">Preferred Contact Method:</Label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    {...register('contactMethod')}
                    type="radio"
                    value="Phone Call"
                    id="phoneCall"
                    className="form-radio h-4 w-4"
                  />
                  <Label htmlFor="phoneCall" className="ml-2">
                    Phone Call
                  </Label>
                </div>
                <div className="flex items-center">
                  <input
                    {...register('contactMethod')}
                    type="radio"
                    value="Email"
                    id="email"
                    className="form-radio h-4 w-4"
                  />
                  <Label htmlFor="email" className="ml-2">
                    Email
                  </Label>
                </div>
                <div className="flex items-center">
                  <input
                    {...register('contactMethod')}
                    type="radio"
                    value="Text"
                    id="text"
                    className="form-radio h-4 w-4"
                  />
                  <Label htmlFor="text" className="ml-2">
                    Text
                  </Label>
                </div>
              </div>
            </LabelInputContainer>
            <Textarea
              {...register('message')}
              id="message"
              placeholder="Your message..."
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <LabelInputContainer>
              <div className="flex items-center space-x-2">
                <input type="checkbox" {...register('newsletter')} className="form-checkbox h-4 w-4 text-blue-600" />
                <Label htmlFor="newsletter">Subscribe to our newsletter for the latest updates</Label>
              </div>
              <div>
                <p className="text-sm mt-2">
                  By sending us a message you agree to our{' '}
                  <Link href={URLs.TERMS} className="text-blue-600 underline hover:text-blue-800">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href={URLs.PRIVACY} className="text-blue-600 underline hover:text-blue-800">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
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
    </div>
  );
}

export default ContactUsForm;
