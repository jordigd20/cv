export interface ResumeData {
  name: string;
  title: string;
  contact: Contact;
  about: string;
  location: string;
  work: Work[];
  education: Education[];
  languages: Language[];
  skills: string[];
}

export interface Contact {
  email: string;
  tel: string;
  website: {
    url: string;
    name: string;
  };
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface Work {
  title: string;
  role: string;
  url?: string;
  badges: string[];
  description: string;
  accomplishments: string[];
  accomplishementsTitle: string;
  start: string;
  end: string;
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface Language {
  name: string;
  level: string;
}