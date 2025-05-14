'use client';

import * as React from 'react';

import { EventSwitcher } from '@/components/event-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { SidebarNav } from '@/types/menu.types';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEventStore } from '@/store/eventStore';

const data: SidebarNav = {
  events: ['SASO', 'Toko Iwkz', 'Donasi'],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      items: [],
    },
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: 'Product list',
          url: '#',
        },
        {
          title: 'Product variant',
          url: '#',
        },
      ],
    },
    {
      title: 'User',
      url: '#',
      items: [
        {
          title: 'User list',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const events = useEventStore((s) => s.events);
  if (events.length === 0) return null;
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <EventSwitcher />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) =>
          item.items.length === 0 ? (
            <SidebarGroup key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>{item.title}</Link>
              </SidebarMenuButton>
            </SidebarGroup>
          ) : (
            <Collapsible
              key={item.title}
              title={item.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <CollapsibleTrigger>
                    {item.title}{' '}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu className="pl-2">
                      {item.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={item.isActive}>
                            <Link href={item.url}>{item.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ),
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
