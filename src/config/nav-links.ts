import { legalLinksArray } from "./legal-links";
import type { Route } from "next";

export type NavigationLink<T extends string = string> = {
  name: string;
  href: Route<T>;
};

export type NavigationDropdown = {
  name: string;
  items: NavigationLink[];
};

export type NavigationItem = NavigationLink | NavigationDropdown;

// Primary navigation for header
export const primaryNavLinks = {
  home: {
    name: "Home",
    href: "/",
  },
  services: {
    name: "Services",
    items: [
      {
        name: "Web Development",
        href: "/services/web-development",
      },
      {
        name: "IT Consulting",
        href: "/services/consulting",
      },
      {
        name: "Maintenance",
        href: "/services/maintenance",
      },
    ],
  },
  about: {
    name: "About",
    href: "/about",
  },
  contact: {
    name: "Contact",
    href: "/contact",
  },
} as const satisfies Record<string, NavigationItem>;

// Secondary navigation
export const secondaryNavLinks = {
  careers: {
    name: "Careers",
    href: "/careers",
  },
  blog: {
    name: "Blog",
    href: "/blog",
  },
} as const satisfies Record<string, NavigationItem>;

// Legacy navLinks for backwards compatibility
export const navLinks = primaryNavLinks;

export const primaryNavLinksArray: NavigationItem[] = Object.values(primaryNavLinks);
export const secondaryNavLinksArray: NavigationItem[] = Object.values(secondaryNavLinks);
export const navLinksArray: NavigationItem[] = primaryNavLinksArray;
