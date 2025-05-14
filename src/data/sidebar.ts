import { SidebarNav } from '@/types/menu.types';

export const sidebarNavData: SidebarNav = {
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
