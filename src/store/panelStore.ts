import { create } from 'zustand';
import { ReactNode } from 'react';

interface PanelStore {
  isOpen: boolean;
  title?: string;
  content: ReactNode | null;
  openPanel: (content: ReactNode, title?: string) => void;
  closePanel: () => void;
}

export const usePanelStore = create<PanelStore>((set) => ({
  isOpen: false,
  title: undefined,
  content: null,
  openPanel: (content, title) => set({ isOpen: true, content, title }),
  closePanel: () => set({ isOpen: false, content: null, title: undefined }),
}));
