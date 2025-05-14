'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Import custom components
import { DateRangePicker } from '../date-range-picker';
import { MultipleImageUpload } from '../multiple-image-upload';
import { ContactPersonSelect } from '../contact-person-select';

// Contact persons data
const contactPersons = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
];

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  contactPersonId: z.string({
    required_error: 'Please select a contact person.',
  }),
  dateRange: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    {
      required_error: 'Please select a date range.',
    },
  ),
});

type FormValues = z.infer<typeof formSchema>;

interface FormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventFormPopup({ open, onOpenChange }: FormPopupProps) {
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      contactPersonId: '',
    },
  });

  const handleImagesChange = (files: File[]) => {
    setImages(files);
  };

  const onSubmit = (data: FormValues) => {
    // Include the images with the form data
    const formData = {
      ...data,
      images,
    };

    console.log('Form submitted:', formData);
    onOpenChange(false);

    // Reset form
    form.reset();
    setImages([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={'lg:max-w-screen-lg overflow-y-scroll max-h-screen'}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DateRangePicker control={form.control} name="dateRange" label="Duration" />

            <MultipleImageUpload onChange={handleImagesChange} label="Upload Images" />

            <ContactPersonSelect
              control={form.control}
              name="contactPersonId"
              label="Contact Person"
              options={contactPersons}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
