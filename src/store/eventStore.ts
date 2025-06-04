import { ShopEvent } from '@/types/shopEvent.types';
import { create } from 'zustand';

interface EventState {
  selectedEvent: ShopEvent | null;
  events: ShopEvent[];
  loading: boolean;
  setSelectedEvent: (item: ShopEvent) => void;
  setEvents: (items: ShopEvent[]) => void;
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
