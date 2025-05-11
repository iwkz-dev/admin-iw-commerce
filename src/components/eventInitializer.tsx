'use client';

import { useEventStore } from '@/store/eventStore';
import { Event } from '@/types/event.types';
import { useEffect } from 'react';

export const EventInitializer = () => {
  const setEvents = useEventStore((state) => state.setEvents);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/events');
      const data: { events: Event[] } = await res.json();
      setEvents(data.events);
    };

    fetchEvents();
  }, [setEvents]);

  return null; // No UI, just logic
};
