export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Specialty {
  id: string;
  name: string;
  icon: string;
  href: string;
  description?: string;
}

export interface Doctor {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualifications: string;
  experience: string;
  image?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string;
  emergencyPhone: string;
  hours: string;
  opd: string;
}

export interface QuickStat {
  value: string;
  label: string;
  icon?: string;
}
