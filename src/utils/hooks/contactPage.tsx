'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '~/components/ui/use-toast';
import { contactFormSchema } from '~/shared/data/zodSchemas/contactFormSchema';
import { IFormInput } from '~/shared/types';
import { useState } from 'react';
import { ToastAction } from '~/components/ui/toast';


export const useContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormInput>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
          newsletter: false,
        },
      });
    
      const toast = useToast();
      const [isSubmitting, setIsSubmitting] = useState(false);
    
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

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
