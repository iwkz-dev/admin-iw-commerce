'use client';

import { EventFormPopup } from '@/components/forms/event-form-popup';
import { Button } from '@/components/ui/button';
import { useEventStore } from '@/store/eventStore';
import React, { useState } from 'react';

const Page = () => {
  const eventLoading = useEventStore((s) => s.loading);
  const events = useEventStore((s) => s.events);
  const [open, setOpen] = useState(false);

  if (eventLoading)
    return (
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    );

  if (events.length === 0)
    return (
      <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <Button onClick={() => setOpen(true)}>Open Form</Button>
        <EventFormPopup open={open} onOpenChange={setOpen} />
      </div>
    );

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      CONTENT HERE
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
};

export default Page;
