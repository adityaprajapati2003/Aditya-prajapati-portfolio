import { EducationItem, ExperienceItem } from './timeline.types';

export const educationData: EducationItem[] = [
  {
    degree: "MASTER OF COMPUTER APPLICATIONS IN DATA SCIENCE",
    duration: "2025  - 2027",
    institution: "Lovely Professional University, Punjab, India",
    cgpa: "CGPA: 9/10 Expected",
  },
  {
    degree: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
    duration: "2021 - 2024",
    institution: "Nagindas Khandwala College, Mumbai University, Mumbai, India",
    description: "I successfully passed the Bachelor of Science in Information Technology and scored 9.23 CGPA out of 10.",
  },
  {
    degree: "HIGHER SECONDARY EXAM (10+2)",
    duration: "2019 - 2021",
    institution: "BSGD's College, Mumbai, India",
    description: "I successfully passed the Higher Secondary Exam (10+2) and scored 50.40%.",
  }
];

export const experienceData: ExperienceItem[] = [
  {
    title: "Team Leader, Science Exhibition",
    company: "Land Department, School Science Exhibition",
    duration: "2017",
    type: "volunteer",
    points: [
      "Led a student team as a dedicated volunteer for the Land Department exhibition booth in the school science event, supporting teachers and managing participants while ensuring smooth coordination across multiple exhibition activities.",
      "Assisted in the comprehensive organization and management of the booth, handling logistics and student assignments, facilitating communication between staff and attendees, and actively contributing to a successful event experience for both educators and students."
    ]
  }
];
