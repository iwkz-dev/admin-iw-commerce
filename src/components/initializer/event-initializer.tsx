'use client';

import { useEventStore } from '@/store/eventStore';
import { ShopEvent } from '@/types/shopEvent.types';
import { useEffect } from 'react';

export const EventInitializer = () => {
  const setEvents = useEventStore((state) => state.setEvents);
  const setLoading = useEventStore((state) => state.setLoading);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/events');
        const data: { events: ShopEvent[] } = await res.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Failed to fetch events', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [setEvents, setLoading]);

  return null;
};
