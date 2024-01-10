export interface ResumeData {
  name: string;
  title: string;
  website: {
    url: string;
    name: string;
  };
  contact: Contact;
  work: Work[];
  education: Education[];
  languages: Language[];
  skills: string[];
}

export interface Contact {
  email: string;
  tel: string;
  social: Social[];
}

export interface Social {
  name: 'github' | 'linkedin';
  url: string;
  icon: string;
}

export interface Work {
  title: string;
  role: string;
  badges: string[];
  description: string;
  accomplished: string[];
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