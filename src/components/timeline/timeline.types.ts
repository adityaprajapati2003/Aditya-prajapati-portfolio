export interface EducationItem {
  degree: string;
  duration: string;
  institution: string;
  cgpa?: string;
  description?: string;
}

export interface ExperienceItem {
  title: string;
  duration: string;
  company: string;
  points?: string[];
  type: 'internship' | 'volunteer' | 'work';
}
