export interface SidebarNav {
  navMain: NavItem[];
}

export interface NavItem {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
    isActive?: boolean;
  }[];
}
