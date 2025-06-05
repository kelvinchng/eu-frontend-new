export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  phone: string;
  address: string;
  hours: string;
  socialMedia: SocialMedia[];
}

export interface FooterData {
  columns: FooterColumn[];
  contactInfo: ContactInfo;
  copyright: string;
}
