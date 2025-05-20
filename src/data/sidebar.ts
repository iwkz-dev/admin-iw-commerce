import { SidebarNav } from '@/types/menu.types';

export const sidebarNavData: SidebarNav = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      items: [],
    },
    {
      title: 'Products',
      url: '',
      items: [
        {
          title: 'Product list',
          url: '/products',
        },
        {
          title: 'Product variant',
          url: '/products-variant',
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
