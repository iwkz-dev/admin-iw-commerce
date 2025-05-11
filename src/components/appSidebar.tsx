import * as React from 'react';

import { EventSwitcher } from '@/components/eventSwitcher';
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

const data: SidebarNav = {
  events: ['SASO', 'Toko Iwkz', 'Donasi'],
  navMain: [
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: 'Product list',
          url: '#',
          isActive: true,
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
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <EventSwitcher versions={data.events} defaultVersion={data.events[0]} />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
