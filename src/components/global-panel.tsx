'use client';

import { usePanelStore } from '@/store/panelStore';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function GlobalPanel() {
  const { isOpen, content, title, closePanel } = usePanelStore();

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closePanel}>
      <DialogContent
        className={'lg:max-w-screen-lg overflow-y-scroll max-h-screen'}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {content}
      </DialogContent>
    </Dialog>
  );
}
