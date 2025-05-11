export interface SidebarNav {
  events: string[];
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
