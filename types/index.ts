export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface NavColumn {
  heading?: string;
  items: NavItem[];
}

export interface ClientLogo {
  name: string;
  src?: string;
}

export interface StackTab {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  body: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface TimelineStep {
  number: string;
  title: string;
  body: string;
}

export interface ResourceCard {
  type: "Case Study" | "Guide" | "Webinar" | "Report";
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string }>;
}
