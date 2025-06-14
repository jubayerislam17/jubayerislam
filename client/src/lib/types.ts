export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  category: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
