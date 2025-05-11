import { Event } from '@/types/event.types';
import { create } from 'zustand';

interface EventState {
  selectedEvent: Event | null;
  events: Event[];
  loading: boolean;
  setSelectedEvent: (item: Event) => void;
  setEvents: (items: Event[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useEventStore = create<EventState>()((set) => ({
  selectedEvent: null,
  events: [],
  loading: true,
  setSelectedEvent: (item) => set(() => ({ selectedEvent: item })),
  setEvents: (items) => set(() => ({ events: items })),
  setLoading: (loading) => set({ loading }),
}));
