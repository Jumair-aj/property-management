import React from "react";

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "stroke"> {
  size?: number;
  stroke?: number;
}


const Icon = ({ children, size = 18, stroke = 1.5, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

export const Icons = {
  Search: (p: IconProps) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></Icon>,
  ArrowRight: (p: IconProps) => <Icon {...p}><path d="M5 12h14M13 5l7 7-7 7"/></Icon>,
  ArrowLeft: (p: IconProps) => <Icon {...p}><path d="M19 12H5M11 5l-7 7 7 7"/></Icon>,
  ArrowUpRight: (p: IconProps) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9"/></Icon>,
  Heart: (p: IconProps) => <Icon {...p}><path d="M20.4 4.6a5.5 5.5 0 0 0-7.8 0L12 5.2l-.6-.6a5.5 5.5 0 0 0-7.8 7.8L12 20.8l8.4-8.4a5.5 5.5 0 0 0 0-7.8z"/></Icon>,
  Bed: (p: IconProps) => <Icon {...p}><path d="M3 18v-6h18v6M3 12V8a2 2 0 0 1 2-2h6v6M3 18v2M21 18v2"/></Icon>,
  Bath: (p: IconProps) => <Icon {...p}><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3zM6 12V6a2 2 0 0 1 2-2h1M9 5l3 1M5 22l1-3M19 22l-1-3"/></Icon>,
  Area: (p: IconProps) => <Icon {...p}><path d="M21 3v6M21 3h-6M3 21v-6M3 21h6M3 3l8 8M21 21l-8-8"/></Icon>,
  Pin: (p: IconProps) => <Icon {...p}><path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></Icon>,
  Star: (p: IconProps) => <Icon {...p}><path d="M12 2 15 9l7 .8-5.3 4.8L18 22l-6-3.6L6 22l1.3-7.4L2 9.8 9 9z" fill="currentColor" stroke="none"/></Icon>,
  StarOutline: (p: IconProps) => <Icon {...p}><path d="M12 2 15 9l7 .8-5.3 4.8L18 22l-6-3.6L6 22l1.3-7.4L2 9.8 9 9z"/></Icon>,
  Share: (p: IconProps) => <Icon {...p}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v14"/></Icon>,
  Shield: (p: IconProps) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></Icon>,
  Users: (p: IconProps) => <Icon {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6"/><path d="M16 11a3.5 3.5 0 1 0 0-6M22 21c0-3-2-5-5-5.5"/></Icon>,
  Headphones: (p: IconProps) => <Icon {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-7h3v5zM3 19a2 2 0 0 0 2 2h1v-7H3v5z"/></Icon>,
  Tag: (p: IconProps) => <Icon {...p}><path d="M20 12V4h-8L2 14l8 8 10-10z"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/></Icon>,
  Filter: (p: IconProps) => <Icon {...p}><path d="M3 5h18M6 12h12M10 19h4"/></Icon>,
  Grid: (p: IconProps) => <Icon {...p}><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></Icon>,
  List: (p: IconProps) => <Icon {...p}><path d="M3 6h18M3 12h18M3 18h18"/></Icon>,
  Map: (p: IconProps) => <Icon {...p}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><path d="M9 3v15M15 6v15"/></Icon>,
  Plus: (p: IconProps) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  Minus: (p: IconProps) => <Icon {...p}><path d="M5 12h14"/></Icon>,
  X: (p: IconProps) => <Icon {...p}><path d="M6 6l12 12M18 6l-12 12"/></Icon>,
  Check: (p: IconProps) => <Icon {...p}><path d="M5 12l5 5L20 7"/></Icon>,
  Wifi: (p: IconProps) => <Icon {...p}><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/></Icon>,
  Dumbbell: (p: IconProps) => <Icon {...p}><path d="M6 6v12M3 9v6M18 6v12M21 9v6M6 12h12"/></Icon>,
  Car: (p: IconProps) => <Icon {...p}><path d="M5 14h14l-1.5-5.5A2 2 0 0 0 15.5 7h-7a2 2 0 0 0-2 1.5L5 14zM5 14v4h2v-2M19 14v4h-2v-2"/><circle cx="8" cy="17" r="1" fill="currentColor"/><circle cx="16" cy="17" r="1" fill="currentColor"/></Icon>,
  Lock: (p: IconProps) => <Icon {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></Icon>,
  Bolt: (p: IconProps) => <Icon {...p}><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8z"/></Icon>,
  Elevator: (p: IconProps) => <Icon {...p}><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M12 3v18M9 8l3-3 3 3M9 16l3 3 3-3"/></Icon>,
  Snow: (p: IconProps) => <Icon {...p}><path d="M12 2v20M4 6l16 12M4 18 20 6M2 12h20"/></Icon>,
  Laptop: (p: IconProps) => <Icon {...p}><rect x="3" y="5" width="18" height="11" rx="1"/><path d="M2 20h20"/></Icon>,
  Home: (p: IconProps) => <Icon {...p}><path d="m3 11 9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></Icon>,
  Tree: (p: IconProps) => <Icon {...p}><path d="M12 2c-3 3-5 5-5 8a5 5 0 0 0 10 0c0-3-2-5-5-8z"/><path d="M12 14v8"/></Icon>,
  Train: (p: IconProps) => <Icon {...p}><rect x="5" y="3" width="14" height="14" rx="2"/><circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/><path d="M9 17l-2 4M15 17l2 4M9 7h6"/></Icon>,
  Fork: (p: IconProps) => <Icon {...p}><path d="M8 2v8a2 2 0 0 0 2 2v10M8 6h4M12 2v8a2 2 0 0 1-2 2M18 2c-2 0-3 2-3 6s1 5 3 5v9"/></Icon>,
  School: (p: IconProps) => <Icon {...p}><path d="M3 9 12 4l9 5-9 5-9-5zM7 11v5c0 1 2 3 5 3s5-2 5-3v-5"/></Icon>,
  Hospital: (p: IconProps) => <Icon {...p}><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M12 8v8M8 12h8"/></Icon>,
  Calendar: (p: IconProps) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></Icon>,
  Clock: (p: IconProps) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  ChevronRight: (p: IconProps) => <Icon {...p}><path d="m9 6 6 6-6 6"/></Icon>,
  ChevronLeft: (p: IconProps) => <Icon {...p}><path d="m15 6-6 6 6 6"/></Icon>,
  ChevronDown: (p: IconProps) => <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>,
  Sofa: (p: IconProps) => <Icon {...p}><path d="M3 12a2 2 0 0 1 2-2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-1v2M3 12v5a1 1 0 0 0 1 1h1v2M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/></Icon>,
  Paw: (p: IconProps) => <Icon {...p}><circle cx="7" cy="9" r="1.5"/><circle cx="12" cy="6" r="1.5"/><circle cx="17" cy="9" r="1.5"/><circle cx="5" cy="14" r="1.5"/><circle cx="19" cy="14" r="1.5"/><path d="M9 18c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3-3-1-3-3z"/></Icon>,
  Instagram: (p: IconProps) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></Icon>,
  LinkedIn: (p: IconProps) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></Icon>,
  Whatsapp: (p: IconProps) => <Icon {...p}><path d="M3 21l1.5-4A8 8 0 1 1 8 20.5L3 21z"/><path d="M9 10c0 3 2 5 5 5l1-1-2-1-1 1-1-1 1-1-1-2-1 1c0-1 0-1-1-1z" fill="currentColor" stroke="none"/></Icon>,
  Wrench: (p: IconProps) => <Icon {...p}><path d="M14 6a4 4 0 1 1 4 4l-9 9-3 1 1-3 9-9z"/></Icon>,
};
