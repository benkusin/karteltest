export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface NavColumn {
  heading?: string;
  items: NavItem[];
}

export interface NavDropdown {
  label: string;
  columns: NavColumn[];
}

export interface CustomerLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface PlatformFeature {
  id: string;
  tabLabel: string;
  headline: string;
  subheadline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc?: string;
  badgeLabel?: string;
}

export interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string }>;
}

export interface StatItem {
  value: string;
  label: string;
}
