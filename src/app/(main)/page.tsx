'use client';

import EventDetails from '@/components/event-details';
import { EventForm } from '@/components/forms/event-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEventStore } from '@/store/eventStore';
import { usePanelStore } from '@/store/panelStore';
import React from 'react';

const Page = () => {
  const eventLoading = useEventStore((s) => s.loading);
  const events = useEventStore((s) => s.events);
  const selectedEvent = useEventStore((s) => s.selectedEvent);
  // const [open, setOpen] = useState(false);

  const { openPanel } = usePanelStore();

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
        <Button onClick={() => openPanel(<EventForm />, 'Create New Event')}>Create Event</Button>
      </div>
    );

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Card className="flex flex-col items-end p-2">
        <Button size="sm" onClick={() => openPanel(<EventForm />, 'Create New Event')}>
          Create New Event
        </Button>
      </Card>
      <EventDetails event={selectedEvent} />
    </div>
  );
};

export default Page;
