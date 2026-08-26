export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  badge?: string;
}

export interface TechnicalSkill {
  id: string;
  name: string;
  category: 'core' | 'ai' | 'tool';
  iconType: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string; // 2-line concise description
  category: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export interface SavedInquiry extends ContactFormData {
  id: string;
  timestamp: string;
  status: 'sent' | 'unread' | 'replied';
}

