'use client';
import React from 'react';

import Link from 'next/link';

// Alias imports for components and utilities
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import LabelInputContainer from '~/components/atoms/LabelInputContainer';
import URLs from '~/utils/constants/urls';
import { ContactUsFormProps } from '~/shared/types';
import ItemList from '~/components/common/IconList';

// Relative imports for UI components
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useContactForm } from '~/utils/hooks/contactPage';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';

export function ContactUsForm({ header, items, id, hasBackground = false }: ContactUsFormProps) {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useContactForm();

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <div className="flex flex-wrap justify-between items-start p-4 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 p-4">
          <div className="rounded-none md:rounded-2xl shadow-input dark:bg-secondary-900 bg-primary-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4 md:p-8">
            {/* Contact Info Card Has Bus. Info On it */}
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle>
                  {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ItemList
                  id={id}
                  items={items}
                  iconClass="h-12 w-12 flex items-center justify-center rounded-md text-white bg-primary-900 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
                  titleClass="text-xl font-bold"
                  descriptionClass="text-md text-gray-500 dark:text-gray-400"
                  containerClass="" // Add the missing property containerClass
                  listItemClass="" // Add the missing property listItemClass
                />
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Contact Us Form */}
        <div className="w-full md:w-1/2 p-4">
          <div className="rounded-none md:rounded-2xl shadow-input dark:bg-secondary-900 bg-primary-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4 md:p-8">
            <div className="mb-4 text-center">
              <h2 className="text-xl font-bold">Contat Form</h2>
              <p>We would love to hear from you!</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
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
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
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
              {/* Message Field */}
              <Textarea
                {...register('message')}
                id="message"
                placeholder="Your message..."
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

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
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

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
    </WidgetWrapper>
  );
}

export default ContactUsForm;
