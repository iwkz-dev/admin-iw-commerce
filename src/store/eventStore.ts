import { Event } from '@/types/event.types';
import { create } from 'zustand';

interface EventState {
  selectedEvent: Event | null;
  events: Event[];
  setSelectedEvent: (item: Event) => void;
  setEvents: (items: Event[]) => void;
}

export const useEventStore = create<EventState>()((set) => ({
  selectedEvent: null,
  events: [],
  setSelectedEvent: (item) => set(() => ({ selectedEvent: item })),
  setEvents: (items) => set(() => ({ events: items })),
}));
