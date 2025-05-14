'use client';

import EventDetails from '@/components/event-details';
import { EventFormPopup } from '@/components/forms/event-form-popup';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEventStore } from '@/store/eventStore';
import React, { useState } from 'react';

const Page = () => {
  const eventLoading = useEventStore((s) => s.loading);
  const events = useEventStore((s) => s.events);
  const selectedEvent = useEventStore((s) => s.selectedEvent);
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

  if (events.length === 0 || !selectedEvent)
    return (
      <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <Button onClick={() => setOpen(true)}>Create Event</Button>
        <EventFormPopup open={open} onOpenChange={setOpen} />
      </div>
    );

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Card className="flex flex-col items-end p-4">
        <Button onClick={() => setOpen(true)}>Create New Event</Button>
        <EventFormPopup open={open} onOpenChange={setOpen} />
      </Card>
      <EventDetails event={selectedEvent} />
    </div>
  );
};

export default Page;
