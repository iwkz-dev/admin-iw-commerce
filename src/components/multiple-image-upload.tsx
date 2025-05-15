'use client';

import type React from 'react';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface MultipleImageUploadProps {
  onChange: (files: File[]) => void;
  label: string;
}

export function MultipleImageUpload({ onChange, label }: MultipleImageUploadProps) {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const updatedImages = [...images, ...newFiles];
      setImages(updatedImages);

      // Create previews for new files
      const newPreviews: string[] = [];

      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          newPreviews.push(reader.result as string);
          if (newPreviews.length === newFiles.length) {
            setPreviews((prev) => [...prev, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });

      // Notify parent component
      onChange(updatedImages);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    const updatedPreviews = [...previews];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setImages(updatedImages);
    setPreviews(updatedPreviews);

    // Notify parent component
    onChange(updatedImages);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="grid gap-4">
        <div className="border rounded-md p-4">
          <Input type="file" accept="image/*" onChange={handleImageChange} multiple />
        </div>

        {previews.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative rounded-md overflow-hidden border">
                <Image
                  width={320}
                  height={160}
                  src={preview || '/placeholder.svg'}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-40 object-cover"
                  unoptimized={preview ? true : false}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
