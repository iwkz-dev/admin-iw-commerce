'use client';

import { Button } from '@/components/ui/button';
import { useEventStore } from '@/store/eventStore';
import React from 'react';

const Page = () => {
  const eventLoading = useEventStore((s) => s.loading);
  const events = useEventStore((s) => s.events);

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
        <Button>Create Event</Button>
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
